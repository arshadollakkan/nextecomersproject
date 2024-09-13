import connectDB from "@/database";
import User from "@/models/users";
import { hash } from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";



const Schema=Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required(),
    role:Joi.string().required(),
})

export const dynamic="force-dynamic"

export async function POST(req){
    await connectDB();
    const{name,email,password,role}=await req.json()
         const{error} =Schema.validate({name,email,password,role})
         if(error){
            console.log("error at validation");
            return NextResponse.json({
                message:error.details[0].message,
                success:false
            })
            
         }
         //user is present or not
         try{
           const isregisterduser=await User.findOne({email})
           if(isregisterduser){
            console.log("user already present");
            return NextResponse.json({
                message:"user is already registerd",
                success:false
            })
            
            
           }
           else{
            const hashpassword=await hash(password,12)
            const newcreateduser=await User.create({
                name,email,password:hashpassword,role
            })
            if(newcreateduser){
                console.log("user created");
                return NextResponse.json({
                    message:"user created successfully",
                    success:true
                })
            }
           
          
           }
         }
         catch(error){
            console.log("error at creating user");
            return NextResponse.json({
                message:"error at creating user",
                success:false
            })
         }


}



