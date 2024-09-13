"use client";
import { useRouter } from "next/navigation";
import { Logincomponentlist } from "../utlities";
import Inputcomponent from "../forms/inputcomponent";
import { useContext, useEffect, useState } from "react";
import { loginserverfile } from "@/services/login";
import { Globalcontext } from "../context";
import Cookies from "js-cookie";

const Login = () => {
const{setuser,setchecking,user,checking}=useContext(Globalcontext)
    let router=useRouter();
    let initialdata={
        email:"",
        password:""
    }
    const[formdata,setformdata]=useState(initialdata)
    console.log(formdata);
    
    const validation=()=>{
        return formdata && formdata.email&& formdata.email.trim()!=="" && formdata.password && formdata.password.trim()!==""?true:false
    }
    async function connectingtoservice(){
        const data=await loginserverfile(formdata)
        console.log(data);
        if(data.success){
            setuser(true)
            setchecking(data?.finaldata?.user)
            setformdata(initialdata)
            Cookies.set('token',data?.finaldata?.token)
            localStorage.setItem('user',JSON.stringify(data?.finaldata?.user))
        }
        else{
            setuser(false)
        }
        
    } 
    console.log(user,checking);
    


    useEffect(()=>{
        if(user) router.push("/")
    },[user])
    return ( 
        <div className="bg-white relative">
        <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
            <div
            className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
                <div className="w-full mt-0 mr-0 ml-0 mb-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
    <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
        <p className="w-full text-4xl font-medium text-center font-serif">
           Login
        </p>
        
            <div className="w-full mt-6 ml-0 mb-0 mr-0 relative space-y-8">
                {Logincomponentlist.map((list)=>(
                

                    <Inputcomponent value={formdata[list.id]} onchange={(e)=>setformdata({...formdata,[list.id]:e.target.value})} label={list.label} type={list.type} placeholder={list.placeholder} />
                    
                
                   
                    
                ))}
            </div>
            <button disabled={!validation()} onClick={connectingtoservice} className=" disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide mt-3 ">LOGIN</button>
            <div className="ml-[-380px] p-2">
             <p className="text-start">new to website?</p>
             </div>
            <button  className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide "onClick={()=>router.push('/register')}>Register</button>
           
        
    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Login;