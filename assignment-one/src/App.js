import react from 'react';
import './App.css';
import image from './img1.jpg'


function App() {
  return (
    <>
      <div className="container">
        <h1> <a href="index.html"></a>Header</h1>
        <ul className='list'>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    <div className='para'> 
     <h2>PARAGRAPH</h2>
      <p>Barbara had been waiting at the table for twenty minutes. it had been twenty long and excruciating minutes. David had promised that he would be on time today. He never was, but he had promised this one time. She had made him repeat the promise multiple times over the last week until she'd believed his promise. Now she was paying the price.</p>
      </div>
      <div className='image'> 
        <img src={image}/>
      </div>  
      <div className='link'>
        <a href= 'https://reactjs.org' > React Website</a>
      </div>
    </>
  );
}

export default App;
