export const userlinks=[ 
    {
        id:"home",
        label:"Home",
        path:"/"
    },
    {
        id:"listing",
        label:"Allproducts",
        path:"/product/listing/all-products"
    },
    {
        id:"listingmen",
        label:"Men",
        path:"/product/listing/men"
    },
    {
        id:"listingwomen",
        label:"women",
        path:"/product/listing/women"
    },
    {
        id:"listingkids",
        label:"Kids",
        path:"/product/listing/kids"
    }
]

export const adminlinks=[
    {id:"admin listing",
     label:"manage all product",
     path:"/admin-view/allproduct"
    },
    {
        id:"admin new product",
        label:"add new product",
        path:"/admin-view/add-product"
        
    }
]
// export const styles={
//     Button:"mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracky-wide text-white"
// }//ith cheyyam but tailwindcss cheyumbol ith nallathallaa


export const registercomponentlist=[{
    id:"name",
    label:"Name",
    placeholder:"Enter Your name",
    type:"text",
    componenttype:"input"
},
{
    id:"email",
    label:"Email",
    placeholder:"Enter Your email",
    type:"email",
    componenttype:"input"
},
{
    id:"password",
    label:"Password",
    placeholder:"Enter Your password",
    type:"password",
    componenttype:"input"
},
{
    id:"role",
    label:"Role",
    placeholder:"",
    type:"",
    componenttype:"select",
    options:[{
        id:"admin",
        label:"Admin",
    },{
        id:"user",
        label:"User",
    }]
}]
  export const Logincomponentlist=[
    {
        id:"email",
        label:"Email",
        placeholder:"Enter Your email",
        type:"email",
        
    },{
        id:"password",
        label:"Password",
        placeholder:"Enter Your password",
        type:"password",
    
    }
  ]
