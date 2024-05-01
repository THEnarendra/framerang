import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Header_Footer/Navbar';
import About from './About/About';
<<<<<<< HEAD
import Footer from './Header_Footer/Footer';
=======
import { Home } from './Home/Home';
>>>>>>> 938e8b2ba38edc2d30ead1e3941a0a7527fc86d8

function App() {
  return (
    <div className="App">
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
