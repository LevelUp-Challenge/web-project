import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SectionRecrutador } from "../../../style/styled";
import CheckBox from "../../Form/CheckBox";
import Input from "../../Form/Input";
import Submit from "../../Form/Submit";
import TextArea from "../../Form/TextArea";

const Recrutador = ()=>{

    const [recrutadores, setRecrutadores] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/LevelUpApp/rest/recrutador").then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setRecrutadores(resp)
            console.log(resp)
        }).then((error)=>{
            console.log(error)
        })
    },  [])

    return(
        <SectionRecrutador>
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
                <div className="box">
                    <h3>Recrutadores</h3>

                </div>
            </div>
        </SectionRecrutador>
    )
}

export default Recrutador;