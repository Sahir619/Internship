import React from "react";
import "./style.css"
import bg from "../assets/images/background.jpg"
import bg2 from "../assets/images/background2.jpeg"
import bg3 from "../assets/images/background3.png"
import "../components/style.scss"
const Home = () => {
    return(
    <div className="main">
        <div className="grad">
            <img className="background" src ={bg} alt ="" />
            <div className="container">
            <div className="head">
                <h1 className="head-h1">To each their <span className="htext">home</span>.</h1>
            </div>
            <h4>Let’s find a home that’s perfect for you</h4>
            <input className="search" type="text" placeholder="Enter an address, neighborhood, city or ZIP code" />
            </div>
        </div>
        <div className="container1">
            <img className="leftbackground" src ={bg2} alt ="" />
            <div>
                <h2 className="leftbackground-h2">Buy a <span className="htext">Property</span>.</h2>
            </div>
            <p className="leftbackground-p"> Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
            <button className="leftbackground-button">CLick <span className="htext">Here</span></button>
        </div>
        
        <div className="container2">
            <img className="rightbackground" src ={bg3} alt ="" />
            <div>
                <h2 className="rightbackground-h2">What is a <span className="htext">NFT?</span>.</h2>
            </div>
            <p className="rightbackground-p"> NFTs (non-fungible tokens) are unique cryptographic tokens that exist on a blockchain and cannot be replicated. NFTs can represent real-world items like artwork and real estate. </p>
            <button className="rightbackground-button">Know <span className="htext">More</span></button>
    </div>

    
</div>
    )
}
export default Home;