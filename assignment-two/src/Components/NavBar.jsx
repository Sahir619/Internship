import React, {useEffect,useState}from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.scss"
import Logo from "./Logo";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("/")
  const location = useLocation()
  const navigate = useNavigate()
  const goToHome = () => {
    navigate("/")
  }
  useEffect(() => {
    setActiveLink(location.pathname)
  },[location])

  return(
  <>
  <div className="NavBar">
    <div className="NavBar-logo" onClick={goToHome}>
      <Logo/>
    </div>
      
        
        <ul className='NavBar-menu'>
          <li className={activeLink === '/' ? "active" : ""}><Link to= '/'>Home</Link></li>
          <li className={activeLink === '/about' ? "active" : ""}><Link to='/about'>About</Link></li>
          <li className={activeLink === '/products' ? "active" : ""}><Link to='/products'>Products</Link></li>
          <li className={activeLink === '/contact' ? "active" : ""}><Link to= '/contact'>Contact</Link></li>
        </ul>
      
  </div>
</>
);
}
export default NavBar;