import React from "react";
import './Footer.css';
import { FaRocket } from "react-icons/fa";
import { RiTerminalWindowFill } from "react-icons/ri";
import { RiMessage2Fill } from "react-icons/ri";


function Footer(){
     return(
        <div className="footer">
            <div className="first">
            <FaRocket />
             <h5>2,500</h5> 
             <p>enterprise organization successfully launched</p>  

            </div>
            <div className="first">
            <RiTerminalWindowFill />
             <h5>45,000</h5>
             <p>enterprise users onboarded seamlessly</p>
                
            </div>
            <div className="first">
                <RiMessage2Fill />
                <h5>2000,000+</h5>
                <p>professionals trained on product and strategy</p>
                
            </div>
        </div>

     )
      
}
export default Footer;