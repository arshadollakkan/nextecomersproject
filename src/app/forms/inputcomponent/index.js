const Inputcomponent = ({label,type,placeholder,value,onchange}) => {
    return ( 
        <div className="relative">
            <p className="absolute bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600">{label}</p>
            <input type={type||"text"} placeholder={placeholder}
            value={value} onChange={onchange}
            className="placeholder-gray-400 border focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"/>
            
        </div>
     );
}
 
export default Inputcomponent;