import React from "react";
import "./style.css"
import bg10 from "../assets/images/image10.png"
import "./ContactUs.css"
const ContactUs = () => {
    return(
    <div>
        <body>
            <img className="conimg" src={bg10} alt=""/>
            
            <div>
                <form action="" className="contact">
                    
                    <label for="fname">First Name*</label>  
                        <input className="text" type="text" id="fname" name="firstname" placeholder="Your name.." maxlength="15" required/> <br/>
                    <label for="lname">Last Name*</label> <br/>
                        <input className="text" type="text" id="lname" name="lastname" placeholder="Your last name.." maxlength="15" required/> <br/>
                
                    <label for="Mobile">Mobile No.*</label> <br/>
                        <input className="text" type="text" placeholder="enter mobile no. here...." maxlength="10" minlength="10" required/> <br/>
                
                    <label for="Mobile">Email*</label> <br/>
                        <input className="text" type="email" placeholder="enter Email here...."  required id="mail"/> <br/>
                
                    <label for="subject">What Can We Help You With?*</label><br/>
                        <textarea className="text" id="subject" name="subject" placeholder="Write something.."> </textarea> <br/>
                
                    <div className="wrapper">
                        <input className="btn" type="submit" value="SUBMIT" />
                    </div> 
                </form>
            </div>
            
        </body>
    </div>
    )
}
export default ContactUs;