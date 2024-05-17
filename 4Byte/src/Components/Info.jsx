import React, { useState } from 'react';

function Info()
{

    /*const [fname , setfName] = useState("");
    const [lname , setlName] = useState("");
    const [adhname , setadhName] = useState("");
    const [wadd , setwadd] = useState("");
    const [email , setemail] = useState("");
    const [pass , setpass] = useState("");
    const [cpass , setcpass] = useState("");
    const onsubmit = (e)=>{
        e.preventDefault();
        console.log(fname);
        console.log(lname);
        console.log(adhname);
        console.log(email);
        console.log(pass);
        console.log(cpass);
        alert("form Submitted")
    }*/

    const [fullDetails,setFullDetails] = useState({
      lname : "",
      fname:"",
      adhname : "",
      wadd : "",
      email : "",
      pass : "",
      cpass:"",

    })
    const submit = (e)=>{
          e.preventDefault()
          alert("Form Submitted")
          console.log(fullDetails.fname);

    }
    const inputChange = (e)=>{
      
         //console.log(e.target.value)
         //console.log(e.target.id)
         
         setFullDetails((prev)=>{
            return{
              ...prev,
              [e.target.id] : e.target.value,
            }
         })
 
    }
    return(
      <div className='w-full bg-green-400'>
            <form onSubmit={submit} >
      <div className=' flex flex-col justify-center items-center w-full max-h-full'>
        
      <div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
   First Name
  </label>
  <input
    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    value={fullDetails.fname}
    onChange={inputChange}
    placeholder="Enter your firstname"
    id="fname"
  />
</div>

<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
   Last Name
  </label>
  <input
    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    value={fullDetails.lname}
    onChange={inputChange}
    placeholder="Enter your lastname"
    id="lname"
  />
</div>

<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
    Adhaar Card
  </label>
  <input
    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    value={fullDetails.adhname}
    onChange={inputChange}
    placeholder="Enter your aadhaar"
    id="adhname"
  />
</div>


<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
    Wallet Address
  </label>
  <input
    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    value={fullDetails.wadd}
    onChange={inputChange}
    placeholder="Enter your Wallet address"
    id="wadd"
  />
</div>

<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
   Email
  </label>
  <input
    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="email"
    value={fullDetails.email}
    onChange={inputChange}
    placeholder="Enter your email"
    id="email"
  />
</div>

<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
   Password
  </label>
  <input
    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="password"
    value={fullDetails.pass}
    onChange={inputChange}
    placeholder="Enter your password"
    id="pass"
  />
</div>

<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
   Confirm Password
  </label>
  <input
    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="password"
    value={fullDetails.cpass}
    onChange={inputChange}
    placeholder="Enter your confirm password"
    id="cpass"
  />
</div>

<button
  type="submit"
  className="rounded-full mt-5 bg-black px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
>
  Submit
</button>
</div>
</form>
      </div>
  

      
       /* <form onSubmit={submit} >
 

        </form>*/
    )
}
export default Info