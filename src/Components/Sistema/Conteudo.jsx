import React from "react";
import '../../css/Conteudo.css'

const Conteudo = ()=>{
    return(
        <>
            <main className="conteudo">
                <header>
                    <nav>
                        <ul>
                            <li><a href="">Editar CV</a></li>
                            <li><a href="">Editar Perfil</a></li>
                        </ul>
                    </nav>
                    <div class="clear"></div>
                </header>
                <section class="boasVindas">
                    <h1>Olá <span>Candidato</span>, Seja Bem Vindo</h1>
                </section>
            </main>
        </>
    )
}

export default Conteudo;