import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Header_Footer/Navbar';
import About from './About/About';
import Footer from './Header_Footer/Footer';
import { Home } from './Home/Home';
import { useEffect, useState } from 'react';
import { Posters } from './Home/Product Card/Posters';
import { ap1,ap2,ap3,ap4,ap5,ap6,ap7} from './images/anime-posters/animeposters'
import ContactUs from './Home/ContactUs';

function App() {
  const [theme, setTheme] = useState("darkTheme");
  useEffect(() => {
   document.body.className=theme;
  }, [theme]);

  const img1=[
    {
      id:1,
      img:ap2,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:2,
      img:ap1,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:3,
      img:ap3,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:4,
      img:ap4,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:5,
      img:ap5,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:6,
      img:ap6,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
    {
      id:7,
      img:ap7,
      price:50,
      oldPrice:100,
      description:"this is our frame",
      productName:"Luffy Frame || Set of 3"
  },
]

const img2=[
  {
    id:1,
    img:ap1,
    price:50,
    oldPrice:100,
    description:"this is our frame",
    productName:"Luffy Frame || Set of 3"
},
  {
    id:2,
    img:ap2,
    price:50,
    oldPrice:100,
    description:"this is our frame",
    productName:"Luffy Frame || Set of 3"
},
  {
    id:3,
    img:ap3,
    price:50,
    oldPrice:100,
    description:"this is our frame",
    productName:"Luffy Frame || Set of 3"
},
  {
    id:4,
    img:ap4,
    price:50,
    oldPrice:100,
    description:"this is our frame",
    productName:"Luffy Frame || Set of 3"
},
  {
    id:5,
    img:ap5,
    price:50,
    oldPrice:100,
    description:"this is our frame",
    productName:"Luffy Frame || Set of 3"
},
  {
    id:6,
    img:ap6,
    price:50,
    oldPrice:100,
    description:"this is our frame",
    productName:"Luffy Frame || Set of 3"
},
  {
    id:7,
    img:ap7,
    price:50,
    oldPrice:100,
    description:"this is our frame",
    productName:"Luffy Frame || Set of 3"
},
]
  return (
    <div>
      <BrowserRouter>
      <div style={{position:"absolute", width:"100vw",top:0}}><Navbar theme={theme} setTheme={setTheme}/></div>
      
      <Routes>
        <Route path='/' element={<Home theme={theme} setTheme={setTheme}/>}/>
        <Route path='/animeposters' element={<Posters theme={theme} setTheme={setTheme} img={img1}/>}/>
        <Route path='/marvelposters' element={<Posters theme={theme} setTheme={setTheme} img={img2}/>}/>
        <Route path='/animeframes' element={<Posters theme={theme} setTheme={setTheme} img={img2}/>}/>
        <Route path='/marvelframes' element={<Posters theme={theme} setTheme={setTheme} img={img2}/>}/>
        <Route path='/contactus' element={<ContactUs theme={theme} setTheme={setTheme}/>}/>
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
