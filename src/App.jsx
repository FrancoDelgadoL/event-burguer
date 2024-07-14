import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/inicio'
import Terminos from './pages/Terminos'

function App() {
  return (
    <div>
      <Navbar />


      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/terminos" element={<Terminos />} />
      </Routes>


      <Footer />
    </div>

  )
}

export default App
