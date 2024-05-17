import React, { useContext, useState } from 'react';
import UserContext from '../Context/Context';

function Login(){

    const [userdata,setuserdata] = useState("");
    const [passdata,setpassdata] = useState("");

    const {setUser} = useContext(UserContext);

    const handle = (e)=>{ 
          e.preventDefault()
          setUser({userdata,passdata})
    }
     return(
         <>
          <div>
            <h2>Login</h2>
            <input
            type='text'
            value={userdata}
            onChange={(e)=>{
                return setuserdata(e.target.value);
            }}
            placeholder='username'

            />
            <input
            type='password'
            value={passdata}
            onChange={(e)=>{
                return setpassdata(e.target.value)
            }}
            placeholder='password'
            
            />
            <button onClick={handle}>
                Submit
            </button>
          </div>
         </>
     )
}

export default Login