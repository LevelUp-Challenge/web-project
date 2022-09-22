import React from "react";
import { Link } from "react-router-dom";
import '../../css/Conteudo.css'
import Administracao from "./Administracao/Administracao";
import Candidato from "./Candidato/Candidato";
import BoasVindas from "./Home/BoasVindas";
import Recrutador from "./Recrutador/Recrutador";

const Conteudo = ()=>{
    return(
        <>
            <main className="conteudo">
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/login'>Sair</Link></li>
                        </ul>
                    </nav>
                    <div class="clear"></div>
                </header>
                {/* <BoasVindas /> */}
                <Recrutador />
                {/* <Candidato /> */}
                {/* <Administracao /> */}
            </main>
        </>
    )
}

export default Conteudo;