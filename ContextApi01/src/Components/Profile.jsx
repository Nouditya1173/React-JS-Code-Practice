import React, { useContext } from 'react';
import UserContext from '../Context/Context';

function Profile(){
    const {user} = useContext(UserContext)
     if(!user) return <div>Please Login</div>

     return <div>Welcome  {user.userdata} {user.passdata}</div>
}

export default Profile