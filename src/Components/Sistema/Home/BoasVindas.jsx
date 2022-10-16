import React, { useEffect } from "react";
import { useState } from "react";
import { SectionBoasVindas } from "../../../style/styled";






const BoasVindas = () => {
    const [vagas, setVagas] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/LevelUpApp/rest/Vaga").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setVagas(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <SectionBoasVindas>
            <section className="vagas">
                <div className="container flex">

                    <div className="filtros">


                        <ul>
                            <li>Areas: </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Desenvolvedor Front-End</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Desenvolvedor Back-End</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Analista de banco de dados</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Scrum-Master</span>
                            </li>
                        </ul>
                        <ul>
                            <li>Faixa Salarial:</li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Até R$1.000,00</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>R$1.000,00 até R$2.000,00</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>R$2.000,00 até R$3.000,00</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>R$3.000,00 até R$4.000,00</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Acima de R$4.000,00</span>
                            </li>
                        </ul>
                        <ul>
                            <li>Hierarquia:</li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Júnior</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Pleno</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Sênior</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Mâster</span>
                            </li>
                        </ul>
                        <ul>
                            <li>Estado:</li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>São Paulo</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Rio de Janeiro</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Minas Gerais</span>
                            </li>
                        </ul>
                        <ul>
                            <li>Modo:</li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Home Office</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Presencial</span>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" /><span>Híbrido</span>
                            </li>
                        </ul>
                        <button>Filtrar</button>

                    </div>
                    <div class="painelVagas">
                        <h2 class="title">Vagas disponíveis</h2>
                        <div class="groupVagas">
                            {vagas.map((vaga) => ([
                                <div class="vaga">
                                    <h3>{vaga.nomeVaga}</h3>,
                                    <h3>Beneficios da vaga: {vaga.beneficiosVaga}</h3>
                                    <h3>pontuação Minima Desafio: {vaga.desafio}</h3>
                                    <p><b>id:</b> {vaga.id}</p>
                                    <p><b>Salário: </b>{vaga.salario}</p>,
                                    <p><b>Modo: </b>Home Office</p>,
                                    <p><b>Pontuação min de aprovação: </b>{vaga.desafio}</p>,
                                    <p><b>Quantidade de inscritos: </b>{vaga.inscritos}</p>,
                                    <p><b>Inclusiva para PCD's: </b>{vaga.pcdAplicavel}</p>,
                                    <p>,
                                        <b>Requisitos: </b>
                                        <ul>
                                            <li>Conhecimentos em HTML, CSS e JavaScript</li>
                                            <li>Conhecimentos em Framework JavaScript React</li>
                                            <li>Conhecimentos em Metodologia Ágil</li>
                                        </ul>
                                    </p>,
                                    <p><b>Descrição: </b>Buscamos um #fera com espírito empreendedor e que sabe que é o verdadeiro protagonista do seu sucesso! Queremos em nosso time pessoas motivadas por desafios, constante evolução e, claro, que são apaixonadas por tecnologia e transformação!

                                        Como será o dia-a-dia?

                                        Esse #fera vai atuar com desenvolvimento de interfaces para sistemas financeiros, pedimos que tenha o nível de inglês avançado que seja capaz de se comunicar com parte do time de outros países. Também é requerido que esse #fera tenha experiência em React, Javascript(Vanilla), HTML, CSS, consumo de api REST e GIT.


                                    </p>,
                                    <button>Aplicar</button>
                                </div>
                            ]))}
                        </div>
                    </div>
                </div>
            </section>

        </SectionBoasVindas>
    )
};

export default BoasVindas;