import React from 'react'
import { SectionSobre, SectionVantagens } from '../../../style/styled'
import Card from '../Sobre/Card';
import Box from '../Vantagens/Box';


const LandingPage = ()=>{
    return (
        <>
            <SectionSobre>
                <div className="container">
                    <div className="text">
                        <h2 className="title">Sobre o projeto</h2>
                        <p>Gameficar a plataforma de modo que aproxime o Recrutador do Candidato encaminhando etapas de Soft skills e Hard skills, a fim de avaliar as habilidades tanto pessoal quanto profissional de cada requerente de acordo com os requisitos exigidos pela vaga.</p>
                        <p>O projeto tem como objetivo criar a plataforma interativa onde o candidato aplica às vagas com testes Gameficados de forma mais afetiva e divertida, deixando o usuário mais interessado e confortável durante todo o processo seletivo.</p>
                        <p></p>
                        <p>Time de Analistas e Desenvolvedores: </p>
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
                            titulo='Praticidade'
                            descricao='Praticidade ao aplicar para as vagas de seu interesse e testes.'
                        />
                        <Box 
                            lado='right' 
                            titulo='Produtividade'
                            descricao='Dados e respostas com mais coerência.'
                        />
                        <Box 
                            lado='left' 
                            titulo='Flexibilidade'
                            descricao='Game altamente flexível com diferentes propósitos.'
                        />
                        <Box 
                            lado='right' 
                            titulo='Seleção'
                            descricao='Seleção dos candidatos de forma simplificada.'
                        />
                        <Box 
                            lado='left' 
                            titulo='Desempenho'
                            descricao='Plataforma prática para análise de candidatos.'
                        />
                        <div className="clear"></div>
                    </div>
                </div>
            </SectionVantagens>
            
        </>
    )
};

export default LandingPage;