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
import { Customize } from './Home/Product Card/Customizeposters'
import CheckOut from './Home/CheckOut';
import { Track } from './Home/Track';
import { Notification } from './Home/Notification';
import PolicyPage from './Home/PolicyPage';
import TermsOfService from './Terms&Conditions';
import RefundPolicy from './RefundPolicy';
import ShippingPolicy from './ShippingPolicy';

function App() {
  const [theme, setTheme] = useState("darkTheme");
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [error, setError] = useState(null);
  const [footer, setFooter] = useState(true);
  const [subCategory, setSubCategory] = useState();

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [details, fetchDetails] = useState([]);




  const getData = () => {
    fetch(`https://framerang-backend.vercel.app/api/v1/allSectionContent`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => {
        const data = res.content;
        fetchDetails(data);

      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  useEffect(() => {
    getData()
    document.body.className = theme;
  }, [theme]);

  const Poster_Section = details.filter((e) => e.sectionId == 4)
  const Frame_Section = details.filter((e) => e.sectionId == 5)
  console.log(details);

  useEffect(() => {
    fetch('https://framerang-backend.vercel.app/api/v1/allProducts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const fr = data.data
        const frame = fr.filter((e) => e.category === "frame");
        const poster = fr.filter((e) => e.category === "poster");
        const categoryArray = Array.from(new Set(fr.map(user => user.subCategory)));
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
        <div style={{ position: "absolute", width: "100vw", top: 0, height: "1vh" }}><Navbar setIsCartOpen={setIsCartOpen} theme={theme} setTheme={setTheme} /></div>
        {isCartOpen && (<Cart setIsCartOpen={setIsCartOpen} />)}
        <Routes>
          <Route path='/' element={<Home setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/posters' element={<Posters details={Poster_Section} setFooter={setFooter} theme={theme} setTheme={setTheme} img={data1} subCategory={subCategory} />} />
          <Route path='/frames' element={<Posters details={Frame_Section} setFooter={setFooter} theme={theme} setTheme={setTheme} img={data1} subCategory={subCategory} />} />
          <Route path='/contactus' element={<ContactUs setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/customize' element={<Customize setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/checkout' element={<CheckOut setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/Track' element={<Track setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/Notification' element={<Notification setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/policies/privacy-policy' element={<PolicyPage setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/policies/terms-of-service' element={<TermsOfService setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/policies/refund-policy' element={<RefundPolicy setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/policies/shipping-policy' element={<ShippingPolicy setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
        </Routes>
        {footer && (

          <Footer />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
