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
import CheckOut from './Home/CheckOut';
import { Track } from './Home/Track';
import { Notification } from './Home/Notification';

function App() {
  const [theme, setTheme] = useState("darkTheme");
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [error, setError] = useState(null);
  const[footer,setFooter]=useState(true);
  const [subCategory, setSubCategory] = useState();

  const [isCartOpen, setIsCartOpen]= useState(false);

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
        const poster = fr.filter((e)=>e.category==="poster");
        const categoryArray = Array.from(new Set(fr.map(user => user.subCategory)));
        // console.log(categoryArray);
        // console.log("lodu");

        setData(frame);
        setData1(poster);
        setSubCategory(categoryArray);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
      <div style={{position:"absolute", width:"100vw",top:0,height:"1vh"}}><Navbar setIsCartOpen={setIsCartOpen} theme={theme} setTheme={setTheme}/></div>
      {isCartOpen && (<Cart setIsCartOpen={setIsCartOpen}/>)}
      <Routes>
        <Route path='/' element={<Home setFooter={setFooter} theme={theme} setTheme={setTheme}/>}/>
        <Route path='/posters' element={<Posters setFooter={setFooter} theme={theme} setTheme={setTheme} img={data1} subCategory={subCategory}/>}/>
        <Route path='/frames' element={<Posters setFooter={setFooter} theme={theme} setTheme={setTheme} img={data1} subCategory={subCategory}/>}/>
        <Route path='/contactus' element={<ContactUs setFooter={setFooter} theme={theme} setTheme={setTheme}/>}/>
        <Route path='/customize' element={<Customize setFooter={setFooter} theme={theme} setTheme={setTheme}/>}/>
        <Route path='/checkout' element={<CheckOut  setFooter={setFooter} theme={theme} setTheme={setTheme}/>}/>
        <Route path='/Track' element={<Track  setFooter={setFooter} theme={theme} setTheme={setTheme}/>}/>
        <Route path='/Notification' element={<Notification  setFooter={setFooter} theme={theme} setTheme={setTheme}/>}/>
      </Routes>
      {footer &&(

      <Footer/>
      )}
      </BrowserRouter>
    </div>
  );
}

export default App;
