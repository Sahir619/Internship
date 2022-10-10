import React from "react";
import './style.scss';
import foot from "../assets/images/Rectangle.png"

import './style.scss';
const Background = () => {
    return(
        <div>
            <div className="footer">
                <img className="footer-img" src ={foot} alt ="" />    
            </div>
            <h5 className="footerh5">© 2022 Website, Inc. All rights reserved     Terms and Conditions          Privacy Policy       Cookies Policy </h5>
        </div>
        
        
    )
}
export default Background;