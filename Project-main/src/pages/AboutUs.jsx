import React from "react";
import "./style.css"
import bg4 from "../assets/images/image6.png"
import bg5 from "../assets/images/image7.png"
import bg6 from "../assets/images/image9.png"
import bg7 from "../assets/images/image8.png"
import "../components/style.scss"
const AboutUs = () => {
    return(
        <div>
            <div className="AboutUs">
                <img className="AboutUs-img" src ={bg4} alt ="" />
                <div class="Atext">
                     <h3 className="AboutUs-h3">OVERVIEW</h3> 
                    <h2 className="AboutUs-h2">About <span className="htext">Us</span>.</h2>
                    <p className="AboutUs-p"> Whether selling, buying, renting or financing, Our customers can get into their next home with speed, certainty and ease.</p>
                </div>
            </div>
            <img className="A-img2" src ={bg5} alt ="" />
            
            <div className="section01">
                <img className="section01-img" src ={bg6} alt ="" />
                <div>
                    <h2 className="section01-h2">For Our <span className="htext">Customers</span></h2>
                </div>
                <p className="section01-p"> We connect our customer with trusted customer service-focused agents in their local markets through our Agent. Agents must uphold customer experience standards in the areas of responsiveness, knowledge and overall service quality. </p>
            </div>
            <div className="section01">
                <img className="section01-img" src ={bg7} alt ="" />
                <div>
                    <h2 className="section01-h2">Our <span className="htext">Team</span></h2>
                </div>
                <p className="section01-p"> Our team consists of  Sahir Sikander, Nathan Fernandes, Siddhi Shirodkar and Rutuja Volvoikar.<br/><br/>We aim to provide Real Estate services in the form of  NFTs.</p>
            </div>
        </div>
    )
}
export default AboutUs;