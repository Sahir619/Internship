import React,{useState, useEffect} from "react";
import './style.scss';
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png"

const Navbar = () =>{
    const location = useLocation();
    const [activeLink, setActiveLink] = useState()
    const navigate = useNavigate();
    const gotoHome = () => {
        navigate("/")
    }

    useEffect(()=>{
        setActiveLink(location.pathname)
    },[location])
    return(
        <header className="hero">

            <div className="navbar">
                
                <div className="navbar-logo" onClick={gotoHome}>
                    <img src={logo} alt=""/>
                </div>

                <ul className="navbar-menu">
                    <li className={activeLink ==="/" ? "active":""}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={activeLink ==="/AboutUs" ? "active":""}>
                        <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li className={activeLink ==="/Nft" ? "active":""}>
                        <Link to="/Nft">NFT</Link>
                    </li>
                    <li className={activeLink ==="/ContactUs" ? "active":""}>
                        <Link to="/ContactUs">Contact Us</Link>
                    </li>
                    <li className={activeLink ==="/Nftpay" ? "active":""}>
                        <Link to="/Nftpay">Nftpay</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Navbar;