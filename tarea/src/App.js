import Navbar from "./components/Navbar/Navbar"
import Home from "./components/pages/home/Home";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Juegos from "./components/pages/Juegos";
import Contacto from "./components/pages/Contacto";
import GiftCards from "./components/pages/GiftCards";
import Footer from "./components/Footer/Footer";
import { Carousel } from "react-bootstrap";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/juegos" element={<Juegos/>} />
          <Route path="/GiftCards" element={<GiftCards />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      
      </div>
      <Footer/>
    </>
  )
}

export default App
