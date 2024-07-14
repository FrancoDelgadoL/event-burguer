import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/inicio'
import Terminos from './pages/Terminos'
import Nosotros from './pages/Nosotros'
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div>
      <Navbar />


      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/nosotros" element={<Nosotros />} />
      </Routes>


      <Footer />
    </div>

  )
}

export default App
