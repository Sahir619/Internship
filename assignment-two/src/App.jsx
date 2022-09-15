import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar'
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import './App.scss'
import Background from "./Components/Background";


function App() {
  return (
  <>
    <div className='main'>
      <Router>
        <NavBar/>
        <Background/>
        <Routes>  
          <Route exact path="/" element={<Home />}/>
          <Route path ="/about" element={<About />}/>         
          <Route path ="/products" element={<Products />}/>         
          <Route path ="/contact" element={<Contact />}/>         
          <Route path ="*" element={<NoPage />}/>            
        </Routes>
      </Router>
    </div>
  </>
  );
}

export default App;





