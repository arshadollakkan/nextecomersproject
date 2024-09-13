
"use client";

import { adminlinks, userlinks } from "@/app/utlities";
// import { useContext} from "react";
import Commonmodel from "../commonmodel";
import {Fragment, useContext } from "react";
import { Globalcontext } from "@/app/context";
import { useRouter } from "next/navigation";
// import { GlobalState } from "@/app/context";



let admin = false;
// let user = true;
// let checking = {
//     role: 'admin'  //static change ayi
// }


  function Navcompoents({content=false}){

    return(
        <div className={`items-center justify-between w-full md:flex  md:w-auto ${content? " ":"hidden"}`} id="nav-items">
            <ul className={`${content? 'border-none': 'border border-gray-100'} flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white`}>
            {
                            admin ? adminlinks.map((data) => (
                                
                                    <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0" key={data.id}>{data.label}</li>
                                
                            )) : userlinks.map(data => (
                            
                                    <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0" key={data.id}>{data.label}</li>
                                
                            ))
                        }
            </ul>
        </div>
    )
}

const Navbar = () => {
    let router=useRouter()
    const {showpanel,setshowpanel}=useContext(Globalcontext)
    const{user,checking,setuser,setchecking}=useContext(Globalcontext)
    const settingstologin=()=>{
        setuser(false)
        setchecking(null)
        Cookies.remove('token')
        localStorage.clear('user')
        router.push("/")
    }
    
    return (

        <>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flext items-center cursor-pointer">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Ecommercery</span>
                    </div>
                  
                    <div className="flex md:order-2 gap-2">
                        {
                            !admin && user ? (
                                <Fragment>
                                    <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracky-wide text-white">Account</button>
                                    <button  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracky-wide text-white">Cart</button>
                                </Fragment>
                            ) : null
                        }
                        {
                            checking?.role === 'admin' ?
                                admin ? (
                                    <button  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracky-wide text-white"> clientview</button>

                                )

                                    :
                                    <button  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracky-wide text-white"> admin view</button>


                                :
                                null

                        }
                        {
                            user ? <button onClick={settingstologin} className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracky-wide text-white">logout</button> : <button onClick={()=>router.push("/login")} className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracky-wide text-white">login</button>
                        }

            
                
                            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={()=>setshowpanel(true)}
            
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
        
         </div>
                
                     <Navcompoents/>
            
                </div>

            </nav>
            <Commonmodel settitle={false}  show={showpanel} setshow={setshowpanel} maincontent={<Navcompoents content={true} />}/>
        </>

    );
}

export default Navbar;
