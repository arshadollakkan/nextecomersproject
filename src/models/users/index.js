import mongoose from "mongoose";

const usermodel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})

 const User= mongoose.models.User || mongoose.model("User",usermodel);
 export default User;