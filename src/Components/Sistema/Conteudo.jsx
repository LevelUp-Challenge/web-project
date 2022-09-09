import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import '../../css/Conteudo.css'
import BoasVindas from "./BoasVindas";

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
                <BoasVindas />
            </main>
        </>
    )
}

export default Conteudo;