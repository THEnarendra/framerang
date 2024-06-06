import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Header_Footer/Navbar';
import About from './About/About';
import Footer from './Header_Footer/Footer';
import { Home } from './Home/Home';
import { useEffect, useState } from 'react';
import { Posters } from './Home/Product Card/Posters';
import ContactUs from './Home/ContactUs';
import { Cart } from './Home/Cart';
import {Customize} from './Home/Product Card/Customizeposters'
function App() {
  const [theme, setTheme] = useState("darkTheme");
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
   document.body.className=theme;
  }, [theme]);


  useEffect(() => {
    fetch('https://framerang-backend.vercel.app/api/v1/allProducts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const fr =data.data
        const frame = fr.filter((e)=>e.category==="frame"); 
        const poster = fr.filter((e)=>e.category==="poster")
          setData(frame);
        setData1(poster)
        // setLoading(false);
      })
      .catch((error) => {
        setError(error);
        // setLoading(false);
      });
  }, []);
  
  console.log(data);


  return (
    <div>
      <BrowserRouter>
      <div style={{position:"absolute", width:"100vw",top:0}}><Navbar theme={theme} setTheme={setTheme}/></div>
      
      <Routes>
        <Route path='/' element={<Home theme={theme} setTheme={setTheme}/>}/>
        {/* <Route path='/animeposters' element={<Posters theme={theme} setTheme={setTheme} img={data}/>}/> */}
        <Route path='/posters' element={<Posters theme={theme} setTheme={setTheme} img={data1}/>}/>
        {/* <Route path='/animeframes' element={<Posters theme={theme} setTheme={setTheme} img={data}/>}/> */}
        <Route path='/frames' element={<Posters theme={theme} setTheme={setTheme} img={data1}/>}/>
        <Route path='/contactus' element={<ContactUs theme={theme} setTheme={setTheme}/>}/>
        <Route path='/cart' element={<Cart theme={theme} setTheme={setTheme}/>}/>
        <Route path='/customize' element={<Customize theme={theme} setTheme={setTheme}/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
