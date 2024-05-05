import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Header_Footer/Navbar';
import About from './About/About';
import Footer from './Header_Footer/Footer';
import { Home } from './Home/Home';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState("dark");
  return (
    <div className={theme==="dark"? "App" :" App_lite"}>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
