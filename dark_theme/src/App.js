import React,{createContext,useContext,useState} from 'react';
import './App.css';
import image1 from './mobile1.jpeg'; // Import your mobile images
import image2 from './mobile2.jpg';

const ThemeContext=createContext();

const useTheme= ()=>useContext (ThemeContext);


function App() {
const [darkMode,setDarkMode]=useState(false);

const toggle= ()=>{
  setDarkMode(!darkMode);
}
 

  return (

    <ThemeContext.Provider value={darkMode ? 'dark':'light'}>
    <div className={`App ${darkMode ? 'dark':'light'}`}>
      <div>
      <h1>Mobile Store</h1>
      <button className='themeMode' onClick={toggle} >{darkMode ? <i class="fa-solid fa-lightbulb"></i>:<i class="fa-solid fa-moon"></i>}</button>
      </div>
      <div className="mobile-container">
        <div className="mobile-card">
          <img src={image1} alt="Mobile 1" className="mobile-image" />
          <div className="mobile-details">
            <h2 className="mobile-name">Iphone 11</h2>
            <p className="mobile-price">60,000 RS</p>
            <button  className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div className="mobile-card">
          <img src={image2} alt="Mobile 2" className="mobile-image" />
          <div className="mobile-details">
            <h2 className="mobile-name">Redmi 12 pro</h2>
            <p className="mobile-price">15,000 Rs</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;

