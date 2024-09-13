export const registerservice=async(formdata)=>{
   try{
    const responce=await fetch("/api/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formdata)
    })
    const data=await responce.json();
    return data;
   }
   catch(error){
    console.log("error",error);
   }
    
}