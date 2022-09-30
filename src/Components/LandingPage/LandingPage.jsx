import React from 'react'
import { Header, SectionBanner, SectionSobre, SectionVantagens, SectionFooter } from '../../style/styled'
import { Link } from 'react-router-dom';
import Card from './Sobre/Card';
import Box from './Vantagens/Box';
import Fiap from '../../img/fiap.png'
import Ibm from '../../img/ibm.jpg'

const LandingPage = ()=>{
    return (
        <>
            <SectionBanner>
                <div className="img">
                    <div className="container">
                        <div className="texto ">
                            <h1><span>Aproximando</span>pessoas e <span>conexões</span>!</h1>
                            <p>O sistema que conecta o candidato do recrutador.</p>
                        </div>
                    </div>
                </div>
            </SectionBanner>
            <Header>
                <div className="container">
                    <div className="logo">LevelUp Experience</div>
                    <nav className="menu">
                        <ul className="menu">
                            <li><Link to='/'>Página inicial</Link></li>
                            <li><Link to='/login' target='_blank'><span>Fazer Login</span></Link></li>
                        </ul>
                    </nav>
                </div>
            </Header>
            <SectionSobre>
                <div className="container">
                    <div className="text">
                        <h2 className="title">Sobre o projeto</h2>
                        <p>Gameficar a plataforma de modo que aproxime o Recrutador do Candidato encaminhando etapas de Soft skills e Hard skills, a fim de avaliar as habilidades tanto pessoal quanto profissional de cada pretendente de acordo com os requisitos exigidos pela vaga.</p>
                        <p>A ideia principal é criar um sistema de maneira que realize testes específicos por determinadas vagas segmentando-os em etapas/fases, na qual cada etapa terá seu respectivo tempo de conclusão para que o requerente consiga avançar. Caso o usuário não consiga resolver a etapa dentro do tempo estimado, o jogo terminará na respectiva fase e sua pontuação será mediante a fase em questão, tal como: usuário chegou até a fase 6, pontuação final = 6.</p>
                        <p>O grau de cada game será especificado pela empresa que fará os testes considerando vagas de Júnior, Pleno e Sênior, e também o mesmo referente ao tempo de conclusão do game.</p>
                        <p>Nossa equipe de analistas e desenvolvedores: </p>
                    </div>
                    <div className="cards">
                        <Card
                            nome='Vinicius de Oliveira'
                            nomeGitHub='ViniOlr'
                            linkGitHub='https://github.com/ViniOlr'
                            nomeLinkedin="Vinicius de Oliveira"
                            linkLinkedin="https://www.linkedin.com/in/viniolr/"
                        />
                        <Card
                            nome='Jhonatas Oliveira'
                            nomeGitHub='JhonnyO3'
                            linkGitHub='https://github.com/JhonnyO3'
                            nomeLinkedin="Jhonatas Oliveira"
                            linkLinkedin="https://www.linkedin.com/in/jhonatas-oliveira-0039a01bb/"
                        />
                        <Card
                            nome='Gabriel Mira'
                            nomeGitHub='gbmira'
                            linkGitHub='https://github.com/gbmira'
                            nomeLinkedin="Gabriel Mira Soares Santos"
                            linkLinkedin="https://www.linkedin.com/in/gabriel-mira-soares-santos-86b898216"
                        />
                        <Card
                            nome='Nathalia Lopes'
                            nomeGitHub='nathslopess'
                            linkGitHub='https://github.com/nathslopess'
                            nomeLinkedin="Nathalia Lopes"
                            linkLinkedin="http://linkedin.com/in/nathalia-lopes-6b8738216"
                        />
                    </div>
                </div>
            </SectionSobre>
            <div className="ondaPreta"></div>
            <SectionVantagens>
                <div className="container">
                    <h2 className="title">Vantagens</h2>
                    <div className="boxs">
                        <Box 
                            lado='left' 
                            titulo='Exemplo de título de vantagem'
                            descricao='Exemplo de descrição de vantagem'
                        />
                        <Box 
                            lado='right' 
                            titulo='Exemplo de título de vantagem'
                            descricao='Exemplo de descrição de vantagem'
                        />
                        <Box 
                            lado='left' 
                            titulo='Exemplo de título de vantagem'
                            descricao='Exemplo de descrição de vantagem'
                        />
                        <Box 
                            lado='right' 
                            titulo='Exemplo de título de vantagem'
                            descricao='Exemplo de descrição de vantagem'
                        />
                        <Box 
                            lado='left' 
                            titulo='Exemplo de título de vantagem'
                            descricao='Exemplo de descrição de vantagem'
                        />
                        <div className="clear"></div>
                    </div>
                </div>
            </SectionVantagens>
            <SectionFooter>
                <div class="container">
                    <div className="patrocinadores">
                        <h3>Apoio: </h3>
                        <div className='imgs'>
                            <img src={Fiap} alt="" />
                            <img src={Ibm} alt="" />
                        </div>
                    </div>
                </div>
            </SectionFooter>
        </>
    )
};

export default LandingPage;