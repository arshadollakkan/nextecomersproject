import mongoose from "mongoose";


const connectDB = async ()=>{
    mongoose.connect("mongodb+srv://yayooop62:VSn2xzJxjDQxBxfs@cluster0.khiss.mongodb.net/",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
       
    }).then(()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log(`something problem at connections of db${err.message}`);
    });

}

export default connectDB;

