import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import Login from './Components/Sistema/Login/Login';
import Cadastro from './Components/Sistema/Cadastro/Cadastro';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
