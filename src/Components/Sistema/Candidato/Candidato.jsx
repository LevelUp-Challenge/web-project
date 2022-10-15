import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionCandidato } from "../../../style/styled";
import CheckBox from "../../Form/CheckBox";
import Input from "../../Form/Input";
import Submit from "../../Form/Submit";
import TextArea from "../../Form/TextArea";
import FormForma from "../Recrutador/FormForma";
import FormCerti from "./FormCerti";

const Candidato = () => {

    const [certificado, setCertificado] = useState([])
    const [formacao, setFormacao] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/LevelUpApp/rest/certificados").then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setCertificado(resp)
            console.log(resp)
        }).then((error)=>{
            console.log(error)
        })

        fetch("http://localhost:8080/LevelUpApp/rest/formacao").then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setFormacao(resp)
            console.log(resp)
        }).then((error)=>{
            console.log(error)
        })
    },  [])

    const deleteCertificado = (id)=>{
        fetch(`http://localhost:8080/LevelUpApp/rest/Vaga/${id}`, {
            method: "delete"
        }).then(()=>{
            alert("Excluido com sucesso");
        }).catch((error)=>{
            console.log(error);
            alert("Erro ao excluir")
        })
    }

    const deleteFormacao = (id)=>{
        fetch(`http://localhost:8080/LevelUpApp/rest/formacao/${id}`, {
            method: "delete"
        }).then(()=>{
            alert("Excluido com sucesso");
        }).catch((error)=>{
            console.log(error);
            alert("Erro ao excluir")
        })
    }

    return (
        <SectionCandidato>
            <div className="container">
                <div className="box">
                    <h3>Cadastro de Certificados</h3>
                    <FormCerti />
                    <table border={1}>
                            <thead>
                                <tr>
                                    <td>Curso</td>
                                    <td>Descrição</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    certificado.map((rec)=>(
                                        <tr key={rec.id}>
                                            <td>{rec.curso}</td>
                                            <td>{rec.descricao}</td>
                                            <td>
                                                <Link to={`/candidato/${rec.id}`}>Editar</Link> 
                                                {/* NÃO ESQUECER DE NO ROUTE COLOCAR QUE ELE ESTÁ ESPERANDO UM ID */}
                                                <button onClick={deleteCertificado.bind(this, rec.id)}>Excluir</button>
                                            </td>
                                            
                                        </tr>
                                        
                                    ))                                    
                                }
                            </tbody>
                        </table>
                </div>
                <div className="box">
                    <h3>Cadastro do Formação</h3>
                    <FormForma />
                    <table border={1}>
                            <thead>
                                <tr>
                                    <td>Grau Formação</td>
                                    <td>Nome da Formação</td>
                                    <td>Nome da Instituição</td>
                                    <td>Data de Inicio</td>
                                    <td>Data de Termino</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    formacao.map((rec)=>(
                                        <tr key={rec.id}>
                                            <td>{rec.grauFormacao}</td>
                                            <td>{rec.nmFormacao}</td>
                                            <td>{rec.nmInstituicao}</td>
                                            <td>{rec.dtInicio}</td>
                                            <td>{rec.dtTermino}</td>
                                            <td>
                                                <Link to={`/candidato/${rec.id}`}>Editar</Link> 
                                                {/* NÃO ESQUECER DE NO ROUTE COLOCAR QUE ELE ESTÁ ESPERANDO UM ID */}
                                                <button onClick={deleteFormacao.bind(this, rec.id)}>Excluir</button>
                                            </td>
                                            
                                        </tr>
                                        
                                    ))                                    
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        </SectionCandidato>
    )
}

export default Candidato;