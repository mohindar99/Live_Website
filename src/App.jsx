import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Error from './Error';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom'
import Footer from './Footer'; 

function App() {
  return (<>
      <NavBar/>
      <Routes >
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services />} />
      <Route path='*' element={<Home />} />
    </Routes>
    <Footer/>
    </>
  );
}
export default App;
