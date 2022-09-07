import React from 'react'
import '../../css/Sobre.css'
import Card from './Card'
import Vinicius from '../../img/vinicius.jpg'

const Sobre = ()=>{
    return(
        <>
            <section class="sobre">
                <div class="container">
                    <div class="Sobre">
                        <h2 class="title">Sobre o projeto</h2>
                        <p>Gameficar a plataforma de modo que aproxime o Recrutador do Candidato encaminhando etapas de Soft skills e Hard skills, a fim de avaliar as habilidades tanto pessoal quanto profissional de cada pretendente de acordo com os requisitos exigidos pela vaga.</p>
                        <p>A ideia principal é criar um sistema de maneira que realize testes específicos por determinadas vagas segmentando-os em etapas/fases, na qual cada etapa terá seu respectivo tempo de conclusão para que o requerente consiga avançar. Caso o usuário não consiga resolver a etapa dentro do tempo estimado, o jogo terminará na respectiva fase e sua pontuação será mediante a fase em questão, tal como: usuário chegou até a fase 6, pontuação final = 6.</p>
                        <p>O grau de cada game será especificado pela empresa que fará os testes considerando vagas de Júnior, Pleno e Sênior, e também o mesmo referente ao tempo de conclusão do game.</p>
                        <p>Nossa equipe de analistas e desenvolvedores: </p>
                    </div>
                    <Card
                        foto={Vinicius}
                        nome='Vinicius de Oliveira'
                        nomeGitHub='ViniOlr'
                        linkGitHub='https://github.com/ViniOlr'
                        nomeLinkedin="Vinicius de Oliveira"
                        linkLinkedin="https://www.linkedin.com/in/viniolr/"
                    />
                </div>
            </section>
        </>
    )
};

export default Sobre;