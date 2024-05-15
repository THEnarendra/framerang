import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Header_Footer/Navbar';
import About from './About/About';
import Footer from './Header_Footer/Footer';
import { Home } from './Home/Home';
import { useEffect, useState } from 'react';
import { Posters } from './Home/Product Card/Posters';

function App() {
  const [theme, setTheme] = useState("darkTheme");
  useEffect(() => {
   document.body.className=theme;
  }, [theme]);

  return (
    <div>
      <BrowserRouter>
      <div style={{position:"absolute", width:"100vw",top:0}}><Navbar theme={theme} setTheme={setTheme}/></div>
      
      <Routes>
        <Route path='/' element={<Home theme={theme} setTheme={setTheme}/>}/>
        <Route path='/animeposters' element={<Posters theme={theme} setTheme={setTheme}/>}/>
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
