import React from 'react'

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

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
