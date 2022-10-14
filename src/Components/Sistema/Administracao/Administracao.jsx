import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionAdministracao } from "../../../style/styled";
import FormRec from "./FormRec";

const Administracao = () => {

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

    const deleteRecrutador = (id)=>{
        fetch(`http://localhost:8080/LevelUpApp/rest/recrutador${id}`, {
            method: "delete"
        }).then(()=>{
            alert("Excluido com sucesso");
        }).catch((error)=>{
            console.log(error);
            alert("Erro ao excluir")
        })
    }

    return (
        <SectionAdministracao>
            <div className="container">
                    <div className="box">
                        <h3>Cadastro de Recrutadores</h3>
                        <FormRec />
                    </div>
                    <div className="box">
                        <h3>Recrutadores</h3>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Nome</td>
                                    <td>Login</td>
                                    <td>Senha</td>
                                    <td>Áreas de Recrutamento</td>
                                    <td colSpan={2}>Ações</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    recrutadores.map((rec)=>(
                                        <tr key={rec.id}>
                                            <td>{rec.nome}</td>
                                            <td>{rec.login}</td>
                                            <td>{rec.senha}</td>
                                            <td>{rec.areas_recrutamento}</td>
                                            <td>
                                                <Link to={`/adm/${rec.id}`}>Editar</Link> 
                                                {/* NÃO ESQUECER DE NO ROUTE COLOCAR QUE ELE ESTÁ ESPERANDO UM ID */}
                                                <button onClick={deleteRecrutador.bind(this, rec.id)}>Excluir</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </SectionAdministracao>
    )
}

export default Administracao;