import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import Login from './Components/Login/Login';
import CadastroUsuario from './Components/CadastroUsuario/CadastroUsuario';
import Sistema from './Components/Sistema/Sistema';
import Candidato from './Components/Sistema/Candidato/Candidato';
import Administracao from './Components/Sistema/Administracao/Administracao';
import Recrutador from './Components/Sistema/Recrutador/Recrutador';
import BoasVindas from './Components/Sistema/Home/BoasVindas';
import ListaCandidatos from './Components/testesAPI/ListaCandidatos';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro-usuario' element={<CadastroUsuario />} />
          <Route path='/levelup' element={<Sistema />} />
          <Route path='/candidato' element={<Candidato></Candidato>}></Route>
          <Route path='/adm' element={<Administracao></Administracao>}></Route>
          <Route path='/adm/:id' element={<Administracao></Administracao>}></Route>
          <Route path='/recrutador' element={<Recrutador></Recrutador>}></Route>
          <Route path='/recrutador/:id' element={<Recrutador></Recrutador>}></Route>
          <Route path='/vagas' element={<BoasVindas></BoasVindas>}></Route> 
          <Route path='/ListaCandidatos' element={<ListaCandidatos></ListaCandidatos>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
