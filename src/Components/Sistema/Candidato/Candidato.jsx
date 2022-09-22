import React from "react";
import '../../../css/Candidato.css'
import CheckBox from "../../Form/CheckBox";
import Input from "../../Form/Input";
import Submit from "../../Form/Submit";
import TextArea from "../../Form/TextArea";

const Candidato = () => {
    return (
        <>
            <section className="candidato">
                <div className="container">
                    <div className="box">
                        <h3>Cadastro de Certificados</h3>
                        <form action="">
                            <Input
                                type='text'
                                nome='nomeCurso'
                                label='Nome do curso'
                                cor='white'
                            />
                            <TextArea
                                nome='descricaoCurso'
                                placeholder='Digite a descrição do seu certificado'
                            />
                            <Submit
                                destino='/'
                                valor='Enviar'
                            />
                        </form>
                    </div>
                    <div className="box">
                        <h3>Cadastro do Formação</h3>
                        <form action="">
                            <Input
                                type='text'
                                nome='nomeFormacao'
                                label='Nome da formação'
                                cor='white'
                            />
                            <Input
                                type='text'
                                nome='tipoFormacao'
                                label='Tipo da formação'
                                cor='white'
                            />
                            <Input
                                type='text'
                                nome='grauFormacao'
                                label='Grau da formação'
                                cor='white'
                            />
                            <Input
                                type='date'
                                nome='dataInicioFormacao'
                                placeholder='Data de inicio da Formação'
                                cor='white'
                            />
                            <CheckBox 
                                nome='cursando'
                                label='Cursando'
                            />
                            <Input
                                type='date'
                                nome='dataFimFormacao'
                                placeholder='Data de fim da Formação'
                                cor='white'
                            />
                            <Submit
                                destino='/'
                                valor='Enviar'
                            />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Candidato;