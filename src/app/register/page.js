"use client";

import { useState } from "react";
import Inputcomponent from "../forms/inputcomponent";
import Selectcomponent from "../forms/selectcomponent";
import { registercomponentlist } from "../utlities";
import { registerservice } from "@/services/register";

const registercheck=false;


const Register = () => {
    let[formdata,setformdata]=useState({
        name:"",
        email:"",
        password:"",
        role:"customer"
    })
    console.log(formdata);
    

     function chekingdata(){
     return  formdata && formdata.name && formdata.name.trim()!==''&&  
       formdata.email && formdata.email.trim()!==''&& 
       formdata.password && formdata.password.trim()!==''?true:false;
    }
      async function sedingdata(){
        const data=await registerservice(formdata);
        console.log(data);
        
      }
    return ( 
    <div className="bg-white relative">
        <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
            <div
            className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
                <div className="w-full mt-0 mr-0 ml-0 mb-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
    <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
        <p className="w-full text-4xl font-medium text-center font-serif">
            {
              registercheck?"registration successfull":"Signup for an account"
            }
        </p>
        {
            registercheck?<button className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide ">Login</button>:<div className="w-full mt-6 ml-0 mb-0 mr-0 relative space-y-8">
                {registercomponentlist.map((list)=>(
                    list.componenttype==="input"? 

                    <Inputcomponent value={formdata[list.id]} onchange={(e)=>setformdata({...formdata,[list.id]:e.target.value})} label={list.label} type={list.type} placeholder={list.placeholder} />
                    :
                    list.componenttype==="select"? 
                    <Selectcomponent value={formdata[list.id]} onchange={(e)=>setformdata({...formdata,[list.id]:e.target.value})} label={list.label} options={list.options}/>
                    :null
                ))}
            </div>
        }
        <button disabled={!chekingdata()} onClick={sedingdata}  className=" disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide mt-3">REGISTER</button>
    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Register;