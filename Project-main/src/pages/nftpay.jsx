import React from "react";
import "./nftpay.css"
import img15 from "../assets/images/image15.png"

const Nftpage = () =>{

return(
  <div className="mainbuy">
    <div className="BuyP">
      <h1> Raj Nagar, <span>Gaziabad</span></h1>
      <h2>5 BHK Bunglow 725 sq/m</h2>
      <br/>
      <div>
        <h1><span>Description:</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia vel veniam voluptatibus delectus quaerat, praesentium tempora asperiores exercitationem sequi explicabo expedita nostrum hic ducimus illum nesciunt iste commodi odit aut, architecto accusamus enim cupiditate. Corrupti, debitis labore ratione possimus voluptates voluptate non reiciendis enim iure? Sed ipsam, tempora, temporibus soluta quibusdam debitis corporis reiciendis odit consectetur nam nisi sapiente commodi!</p>
        <br/>
        <h3>Price: 3.5k BTC</h3>
      </div> 
      <img src={img15} alt="" />
    </div>
    <button>Buy<span> Now</span></button>
  </div>
)
}
export default Nftpage;
