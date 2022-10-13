import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
// import Web3 from "web3"
// import { useState, useEffect } from "react"; 
import nftpay from "../pages/nftpay" 
import "./CardApp.scss"


const Card = (props) => {
    const navigate = useNavigate();

    const navigateTopay = () => {
        // navigate to /nftpay
        navigate('/nftpay');
    };

    return (
      // <body>
        <div className="card">
          <div className="card__body">
            <img src={props.img} class="card__image" alt = ''/>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
          </div>
          <button className="card__btn" onClick={navigateTopay}>More Info</button>
          <Routes>
            <Route path="/nftpay" element={<nftpay/>} />
          </Routes>
        </div>
      // </body>
      );
}
export default Card


// function nftpay() {
//   const [account, setAccount] = useState()
//   const [network, setNetwork] = useState()
//   const [balance,setBalance] =useState()
//   const web3 = new Web3(Web3.givenProvider)
//   useEffect(()=>{
//     loadAccounts();
//   },)
//   async function loadAccounts(){
//     const accounts = await web3.eth.requestAccounts();
//     setAccount(accounts[0]);
//   }
//   return(
//     <div>
        
//         This is Payment 
//     </div>
//   );
// }
