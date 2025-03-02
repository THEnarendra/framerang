import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Header_Footer/Navbar';
import Footer from './Header_Footer/Footer';
import { Home } from './Home/Home';
import { useEffect, useState } from 'react';
import { Posters } from './Home/Product/Posters';
import ContactUs from './Home/ContactUs';
import { Cart } from './Home/Cart';
import { Customize } from './Home/Product/Customizeposters';
import CheckOut from './Home/CheckOut';
import { Track } from './Home/Track';
import { Notification } from './Home/Notification';
import PolicyPage from './Home/PolicyPage';
import TermsOfService from './Terms&Conditions';
import RefundPolicy from './RefundPolicy';
import ShippingPolicy from './ShippingPolicy';
import { ProductPage } from './Home/Product/ProductPage';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  const [theme, setTheme] = useState("darkTheme");
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [error, setError] = useState(null);
  const [footer, setFooter] = useState(true);
  const [subposterCategory, setSubposterCategory] = useState();
  const [subFrameCategory, setSubFrameCategory] = useState();
  const [subComboCategory, setSubComboCategory] = useState();
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
    getData();
    document.body.className = theme;
  }, [theme]);
  const Poster_Section = details.filter((e) => e.sectionId == 4);
  const Frame_Section = details.filter((e) => e.sectionId == 5);


  // useEffect(() => {
  //   fetch('https://framerang-backend.vercel.app/api/v1/allProducts')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const fr = data.data;
  //       const frame = fr.filter((e) => e.category === "Frame");
  //       const poster = fr.filter((e) => e.category === "Poster");
  //       const Combo = fr.filter((e) => e.category === "Combo");
  //       const PostercategoryArray = Array.from(new Set(fr.filter((e) => e.category === 'Poster').map(user => user.subCategory)));
  //       const FramecategoryArray = Array.from(new Set(fr.filter((e) => e.category === 'Frame').map(user => user.subCategory)));
  //       const ComboCategoryArray = Array.from(new Set(fr.filter((e) => e.category === 'Combo').map(user => user.subCategory)));
  //       setData(frame);
  //       setData1(poster);
  //       setData2(Combo)
  //       setSubposterCategory(PostercategoryArray);
  //       setSubFrameCategory(FramecategoryArray);
  //       setSubComboCategory(ComboCategoryArray);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, []);
 
 
  return (
    <div >
      <BrowserRouter>
        <ScrollToTop />
        <div style={{ position: "absolute", width: "100vw", top: 0, height: "1vh" }}>
          <Navbar setIsCartOpen={setIsCartOpen} theme={theme} setTheme={setTheme} />
        </div>
        {isCartOpen && (<Cart setIsCartOpen={setIsCartOpen} />)}
        <Routes>
          <Route path='/' element={<Home setFooter={setFooter} theme={theme} setTheme={setTheme} setIsCartOpen={setIsCartOpen} />} />
          <Route path='/posters' element={<Posters setIsCartOpen={setIsCartOpen} details={Poster_Section} setFooter={setFooter} theme={theme} setTheme={setTheme} img={data1} subCategory={subposterCategory} />} />
          <Route path='/frames' element={<Posters setIsCartOpen={setIsCartOpen} details={Frame_Section} setFooter={setFooter} theme={theme} setTheme={setTheme} img={data} subCategory={subFrameCategory} />} />
          <Route path='/Combos' element={<Posters setIsCartOpen={setIsCartOpen} details={Frame_Section} setFooter={setFooter} theme={theme} setTheme={setTheme} img={data2} subCategory={subComboCategory} />} />
          <Route path='/contactus' element={<ContactUs setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/customize' element={<Customize setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/checkout' element={<CheckOut setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/Track' element={<Track setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/Notification' element={<Notification setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/policies/privacy-policy' element={<PolicyPage setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/policies/terms-of-service' element={<TermsOfService setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/policies/refund-policy' element={<RefundPolicy setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/policies/shipping-policy' element={<ShippingPolicy setFooter={setFooter} theme={theme} setTheme={setTheme} />} />
          <Route path='/ProductPage' element={<ProductPage setFooter={setFooter} theme={theme} setTheme={setTheme} setIsCartOpen={setIsCartOpen} />} />
        </Routes>
        {footer && (
          <Footer />
        )}
      </BrowserRouter>
    </div>
  );
}
export default App;
