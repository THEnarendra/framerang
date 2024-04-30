import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Home/Navbar';
import About from './About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/About' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
