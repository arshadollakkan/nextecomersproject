




export const loginserverfile=async(formdata)=>{
try {
    let responce=await fetch("/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formdata)   
      })
      let data=await responce.json();
      return data;
      
} catch (error) {
    console.log("eroor at uploading data",error);
    
}
  
}