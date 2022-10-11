import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './Components/LandingPage/Footer/Footer';
import Header from './Components/LandingPage/Header/Header';
import Home from './Components/LandingPage/Home/Home'
import Vagas from './Components/LandingPage/Vagas/Vagas';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vagas' element={<Vagas />}></Route> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
