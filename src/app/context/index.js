"use client"
import Cookies from 'js-cookie';
// Correct import
import {  useEffect, useState } from 'react';
import { createContext } from 'react';




 export const Globalcontext = createContext(null);

export default function Contextprovider  ({ children })  {
  const [showpanel, setshowpanel] = useState(false);
  const[user,setuser]=useState(null)
  const[checking,setchecking]=useState(null)
  useEffect(()=>{
console.log(Cookies.get('token'));
if(Cookies.get('token')!==undefined){
  setuser(true)
  let data=JSON.parse(localStorage.getItem('user'))||{}
  setchecking(data)

}
else{
  setuser(false)
}

  },[Cookies])

  
  return (
    <Globalcontext.Provider value={{ showpanel, setshowpanel,
      user,setuser,checking,setchecking
     }}>
      {children}
    </Globalcontext.Provider>
  );
};

// export default Contextprovider;