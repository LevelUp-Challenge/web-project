import React from "react";
import { Link } from "react-router-dom";
import { MainConteudo } from "../../style/styled";
import Administracao from "./Administracao/Administracao";
import Candidato from "./Candidato/Candidato";
import BoasVindas from "./Home/BoasVindas";
import Recrutador from "./Recrutador/Recrutador";

const Conteudo = (props)=>{
    return(
        <MainConteudo>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/login'>Sair</Link></li>
                    </ul>
                </nav>
                <div className="clear"></div>
            </header>
            <BoasVindas />
            {/* <Recrutador /> */}
            {/* <Candidato /> */}
            {/* <Administracao /> */}
            {/* {retornaPagina(props)} */}
        </MainConteudo>
    )
}

export default Conteudo;