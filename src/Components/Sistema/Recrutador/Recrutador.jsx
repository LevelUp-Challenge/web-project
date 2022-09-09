import React from "react";
import '../../../css/Recrutador.css'
import CheckBox from "../../CheckBox";
import Input from "../../Input";
import Submit from "../../Submit";
import TextArea from "../../TextArea";

const Recrutador = ()=>{
    return(
        <>
        <section className="recrutador">
            <div className="container">
                <div className="box">
                    <h3>Cadastro de processos seletivos</h3>
                    <form action="">
                        <Input
                            type='text'
                            nome='nomeVaga'
                            label='Nome da vaga'
                            cor='white'
                        />
                        <Input
                            type='text'
                            nome='areaVaga'
                            label='Área da vaga'
                            cor='white'
                        />
                        <Input
                            type='number'
                            nome='salarioVaga'
                            label='Salário da vaga'
                            cor='white'
                        />
                        <Input
                            type='text'
                            nome='desafioVaga'
                            label='Desafio da vaga'
                            cor='white'
                        />
                        <Input
                            type='number'
                            nome='modalidadeVaga'
                            label='Modalidade da vaga'
                            cor='white'
                        />
                        <TextArea
                            nome='descricaoArea'
                            placeholder='Digite a descrição da vaga'
                        />
                        <TextArea
                            nome='beneficiosArea'
                            placeholder='Digite os benefícios da vaga'
                        />
                        <CheckBox
                            nome='pcd'
                            label='PCD Aplicável'
                        />
                        <Submit
                            destino='/'
                            valor='Enviar'
                        />
                    </form>
                </div>
                <div className="box">
                    <h3>Cadastro de desafio do candidato</h3>
                    <form action="">
                        <Input
                            type='text'
                            nome='nomeDesafio'
                            label='Nome do desafio'
                            cor='white'
                        />
                        <Input
                            type='number'
                            nome='tempoDesafio'
                            label='Tempo do desafio'
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

export default Recrutador;