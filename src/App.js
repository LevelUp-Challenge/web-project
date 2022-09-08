import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import Login from './Components/Sistema/Login/Login';
import CadastroUsuario from './Components/Sistema/CadastroUsuario/CadastroUsuario';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro-usuario' element={<CadastroUsuario />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
