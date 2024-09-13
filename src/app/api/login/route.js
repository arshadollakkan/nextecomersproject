import connectDB from "@/database"
import User from "@/models/users";
import { compare } from "bcryptjs";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";


const schema=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})
export const dynamic="force-dynamic"

export async function POST(req){
    await connectDB();
    const{email,password}=await req.json()
    const{error}=schema.validate({email,password})
    if(error){
        return NextResponse.json({
       success:false,
       message:error.details[0].message
        })
    }

    try {
        const checkuser=await User.findOne({email})
        if(!checkuser){
            console.log("error at email finding");
            return NextResponse.json({
                success:false,
                message:"email id is not match"
            })
            
        }
        
            const checkpassword=await compare(password,checkuser.password)
            if(!checkpassword){
                console.log("password is not match");
                return NextResponse.json({
                    success:false,
                    message:"password is not match"
                    
                })
            }
            const token= jwt.sign({
                id:checkuser._id,
                email:checkuser?.email,
                role:checkuser?.role
            },"default_sceret_key",{
                expiresIn:"1d"
            })
            const finaldata={
                token,
                user:{
                    _id:checkuser._id,
                name:checkuser.name,
                email:checkuser.email,
               
                role:checkuser.role
                }
            }
            return NextResponse.json({
                success:true,
                message:"login successfully",
                finaldata,
            })

        
    } catch (error) {
         console.log("something error at the verification of email and password");
         return NextResponse.json({
            success:false,
            message:"something went wrong! please try again later"
         })
         
    }



}