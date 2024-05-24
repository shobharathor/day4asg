import React from "react";
import './Nav.css';
import Huit from "../Components/Hootsuite-Logo-2014-present.png"

function Nav(){
 return (
      
<div className="navbar">
     
     <div className="firstphase">
       <div className="logo">
       <img src={Huit} alt="" width="100px" height= "100px"></img>
       </div> 
       <div className="links">
            <a href="#">Plateform</a>
            <a href="#">Plans</a>
            <a href="#">Enterprises</a>
            <a href="#">Resaurces</a>
            <a href="#">Education</a>
      </div> 
      </div>
    

      <div className="secondphase">
            <h5>Contacts Us</h5>
            <h5>Log In</h5>
            <button>Sign Up</button>
      </div>
          
    
      

     </div>
 
 
 )

}
export default Nav;