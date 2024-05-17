import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
//import Home from "../Pages/Home"

function Navbar(){
      return(
        
        <div>
            <div>
            <div className=' flex flex-row justify-between'>
                <img src='data:image/jpeg;base64,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'/>
                <div>
                    <p>Home</p>
                    <MdOutlineShoppingCart/>
                </div>
        </div>
        </div>
        </div>
        
      )
};
export default Navbar;