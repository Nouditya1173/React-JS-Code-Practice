//import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData();
   // const [data,setdata] = useState([])

    /*useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((resp)=> resp.json() )
        .then((data) =>{
            console.log(data);
            setdata(data)

        })
    })*/

    return(
       <div className=" grid place-items-center m-10">
        <div className="w-[300px] rounded-md border">
        <img
          src={data.avatar_url}
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold text-gray-600">About Code Aur Chai</h1>
          <p className="mt-3 text-sm text-gray-600">
            {data.bio}
          </p>
          <button
            type="button"
            className="mt-4 rounded-sm bg-orange-700 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-orange/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
           <h3>Followers: {data.followers}</h3>
          </button>
        </div>
      </div>
       </div>
        
      
    )
}

export const loaderinfo = async ()=>{
    const resp = await fetch('https://api.github.com/users/hiteshchoudhary')
    return resp;
}