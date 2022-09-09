import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import Login from './Components/Login/Login';
import CadastroUsuario from './Components/CadastroUsuario/CadastroUsuario';
import Sistema from './Components/Sistema/Sistema';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro-usuario' element={<CadastroUsuario />} />
          <Route path='/levelup' element={<Sistema />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
