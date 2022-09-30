import React from "react";
import { SectionBoasVindas } from "../../../style/styled";

const BoasVindas = ()=>{
    return(
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
                        <input type="checkbox" name="" id=""/><span>Até R$1.000,00</span>
                    </li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>R$1.000,00 até R$2.000,00</span>
                    </li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>R$2.000,00 até R$3.000,00</span>
                    </li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>R$3.000,00 até R$4.000,00</span>
                    </li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>Acima de R$4.000,00</span>
                    </li>
            </ul>
            <ul>
                    <li>Hierarquia:</li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>Júnior</span>
                    </li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>Pleno</span>
                    </li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>Sênior</span>
                    </li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>Mâster</span>
                    </li>
                </ul>
                <ul>
                    <li>Estado:</li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>São Paulo</span>
                    </li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>Rio de Janeiro</span>
                    </li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>Minas Gerais</span>
                    </li>
                </ul>
                <ul>
                    <li>Modo:</li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>Home Office</span>
                    </li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>Presencial</span>
                    </li>
                    <li>
                        <input type="checkbox" name="" id=""/><span>Híbrido</span>
                    </li>
                </ul>
                <button>Filtrar</button>

                    </div>
                    <div class="painelVagas">
                <h2 class="title">Vagas disponíveis</h2>
                <div class="groupVagas">
                    <div class="vaga">
                        <h3>Desenvolvedor Front-End</h3>
                        <p><b>Salário: </b>R$3.000,00</p>
                        <p><b>Modo: </b>Home Office</p>
                        <p><b>Localização: </b>São Paulo</p>
                        <p><b>Hierarquia: </b>Júnior</p>
                        <p>
                            <b>Requisitos: </b>
                            <ul>
                                <li>Conhecimentos em HTML, CSS e JavaScript</li>
                                <li>Conhecimentos em Framework JavaScript React</li>
                                <li>Conhecimentos em Metodologia Ágil</li>
                            </ul>
                        </p>
                        <p><b>Descrição: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus libero et nulla feugiat, et rhoncus urna ornare.
                        Ut quis enim vel quam facilisis dapibus quis vitae metus. Proin nec nibh imperdiet, blandit tellus sit amet, tincidunt urna. Vivamus ligula odio, vulputate id dapibus non, ultrices ac erat. Phasellus laoreet nisl at velit tristique accumsan. Proin sapien turpis, scelerisque a dignissim sed, landit eu magna.</p>
                        <button>Aplicar</button>

                    </div>
                    <div class="vaga">
                        <h3>Desenvolvedor Front-End</h3>
                        <p><b>Salário: </b>R$3.000,00</p>
                        <p><b>Modo: </b>Home Office</p>
                        <p><b>Localização: </b>São Paulo</p>
                        <p><b>Hierarquia: </b>Júnior</p>
                        <p>
                            <b>Requisitos: </b>
                            <ul>
                                <li>Conhecimentos em HTML, CSS e JavaScript</li>
                                <li>Conhecimentos em Framework JavaScript React</li>
                                <li>Conhecimentos em Metodologia Ágil</li>
                            </ul>
                        </p>
                        <p><b>Descrição: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus libero et nulla feugiat, et rhoncus urna ornare.
                        Ut quis enim vel quam facilisis dapibus quis vitae metus. Proin nec nibh imperdiet, blandit tellus sit amet, tincidunt urna. Vivamus ligula odio, vulputate id dapibus non, ultrices ac erat. Phasellus laoreet nisl at velit tristique accumsan. Proin sapien turpis, scelerisque a dignissim sed, landit eu magna.</p>
                        <button>Aplicar</button>
                    </div>
                    <div class="vaga">
                        <h3>Desenvolvedor Front-End</h3>
                        <p><b>Salário: </b>R$3.000,00</p>
                        <p><b>Modo: </b>Home Office</p>
                        <p><b>Localização: </b>São Paulo</p>
                        <p><b>Hierarquia: </b>Júnior</p>
                        <p>
                            <b>Requisitos: </b>
                            <ul>
                                <li>Conhecimentos em HTML, CSS e JavaScript</li>
                                <li>Conhecimentos em Framework JavaScript React</li>
                                <li>Conhecimentos em Metodologia Ágil</li>
                            </ul>
                        </p>
                        <p><b>Descrição: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus libero et nulla feugiat, et rhoncus urna ornare.
                        Ut quis enim vel quam facilisis dapibus quis vitae metus. Proin nec nibh imperdiet, blandit tellus sit amet, tincidunt urna. Vivamus ligula odio, vulputate id dapibus non, ultrices ac erat. Phasellus laoreet nisl at velit tristique accumsan. Proin sapien turpis, scelerisque a dignissim sed, landit eu magna.</p>
                        <button>Aplicar</button>

                    </div>
                    <div class="vaga">
                        <h3>Desenvolvedor Front-End</h3>
                        <p><b>Salário: </b>R$3.000,00</p>
                        <p><b>Modo: </b>Home Office</p>
                        <p><b>Localização: </b>São Paulo</p>
                        <p><b>Hierarquia: </b>Júnior</p>
                        <p>
                            <b>Requisitos: </b>
                            <ul>
                                <li>Conhecimentos em HTML, CSS e JavaScript</li>
                                <li>Conhecimentos em Framework JavaScript React</li>
                                <li>Conhecimentos em Metodologia Ágil</li>
                            </ul>
                        </p>
                        <p><b>Descrição: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus libero et nulla feugiat, et rhoncus urna ornare.
                        Ut quis enim vel quam facilisis dapibus quis vitae metus. Proin nec nibh imperdiet, blandit tellus sit amet, tincidunt urna. Vivamus ligula odio, vulputate id dapibus non, ultrices ac erat. Phasellus laoreet nisl at velit tristique accumsan. Proin sapien turpis, scelerisque a dignissim sed, landit eu magna.</p>
                        <button>Aplicar</button>

                    </div>
                </div>
            </div>
                </div>
            </section>

        </SectionBoasVindas>
    )
};

export default BoasVindas;