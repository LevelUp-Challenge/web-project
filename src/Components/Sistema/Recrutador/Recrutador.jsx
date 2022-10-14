import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionRecrutador } from "../../../style/styled";
import CheckBox from "../../Form/CheckBox";
import Input from "../../Form/Input";
import Submit from "../../Form/Submit";
import TextArea from "../../Form/TextArea";
import FormProc from "./FormProc";

const Recrutador = ()=>{

    const [procsSeletivos, setProcsSeletivos] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/LevelUpApp/rest/Vaga").then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setProcsSeletivos(resp)
            console.log(resp)
        }).then((error)=>{
            console.log(error)
        })
    },  [])

    const deleteProcSeletivo = (id)=>{
        fetch(`http://localhost:8080/LevelUpApp/rest/Vaga/${id}`, {
            method: "delete"
        }).then(()=>{
            alert("Excluido com sucesso");
        }).catch((error)=>{
            console.log(error);
            alert("Erro ao excluir")
        })
    }

    return(
        <SectionRecrutador>
            <div className="container">
                <div className="box">
                    <h3>Cadastro de processos seletivos</h3>
                    <FormProc />
                    <div className="box">
                        <h3>Lista de Processos Seletivos</h3>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Nome da Vaga</td>
                                    <td>Descrição da Vaga</td>
                                    <td>Área da Vaga</td>
                                    <td>Benefícios da Vaga</td>
                                    <td>Modalidade da Vaga</td>
                                    <td>Pcd Aplicável</td>
                                    <td>Desafio</td>
                                    <td>Media Inscritos</td>
                                    <td>Inscritos</td>
                                    <td>Salario</td>
                                    <td colSpan={2}>Ações</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    procsSeletivos.map((rec)=>(
                                        <tr key={rec.id}>
                                            <td>{rec.nomeVaga}</td>
                                            <td>{rec.descricaoVaga}</td>
                                            <td>{rec.areaVaga}</td>
                                            <td>{rec.beneficiosVaga}</td>
                                            <td>{rec.modalidadeVaga}</td>
                                            <td>{rec.pcdAplicavel}</td>
                                            <td>{rec.desafio}</td>
                                            <td>{rec.mediaInscritos}</td>
                                            <td>{rec.inscritos}</td>
                                            <td>{rec.salario}</td>
                                            <td>
                                                <Link to={`/adm/${rec.id}`}>Editar</Link> 
                                                {/* NÃO ESQUECER DE NO ROUTE COLOCAR QUE ELE ESTÁ ESPERANDO UM ID */}
                                                <button onClick={deleteProcSeletivo.bind(this, rec.id)}>Excluir</button>
                                            </td>
                                            
                                        </tr>
                                        
                                    ))                                    
                                }
                            </tbody>
                        </table>
                    </div>
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
        </SectionRecrutador>
    )
}

export default Recrutador;