import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from 'styled-components'

export default function ListaCandidatos() {

    const DivLista = styled.div`

    width: 70%; margin: auto; font-family: Arial; padding-top: 30px;
  
    a{text-decoration: none; padding: 10px 15px; margin-bottom: 20px;
  
      background-color: yellowgreen; color: white; display: inline-block;
  
    }
  
    table {width: 100%; margin: auto;}
  
    thead tr {background-color: #084EDC; color: white;}
  
    thead tr th{padding: 10px;}
  
  
  
    tbody tr:nth-child(2n+2){background-color: #ccc;}
  
    tbody tr td{background-color: none; margin-bottom: 5px; color: #525252; text-align: center; font-weight: bold;}
  
    tbody tr td button{color: red; background-color: none; border: none;}
  
  
  
    tfoot tr td{text-align: center; background-color: #084EDC; color:white; font-weight:bold;}
    `




    const [candidatos, setCandidatos] = useState([])
    const [recrutadores, setRecrutadores] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/LevelUpApp/rest/candidato/").then((resp) => {
            return resp.json();
        }).then((resp) => {
            setCandidatos(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:8080/LevelUpApp/rest/recrutador").then((resp) => {
            return resp.json();
        }).then((resp) => {
            setRecrutadores(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    return (
        <DivLista>
            <div>
                <h1>Lista de candidatos Cadastrados</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th><th>Nome candidato</th><th>Login</th><th>Senha</th><th>data de Nascimento</th><th>Telefone</th><th>Sexo</th>
                        </tr>
                    </thead>

                    <tbody >
                        {candidatos.map((candidato) => (
                            <tr key={candidato.id}>
                                <td>{candidato.id}</td><td>{candidato.nome}</td><td>{candidato.login}</td><td>{candidato.senha}</td><td>{candidato.dataNasc}</td><td>55+ {candidato.telefone}</td><td>{candidato.sexo}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                    <tfoot><td colSpan='7'>Candidatos do servidor</td></tfoot>
                </table>
            </div>
            <div>
                <h1>Lista de Recrutadores Cadastrados</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th><th>Nome Recrutador</th><th>Login</th><th>Senha</th><th>Areas de Recrutamento ativas</th>
                        </tr>
                    </thead>

                    <tbody >
                        {recrutadores.map((recrutador) => (
                            <tr key={recrutador.id}>
                                <td>{recrutador.id}</td><td>{recrutador.nome}</td><td>{recrutador.login}</td><td>{recrutador.senha}</td><td>{recrutador.areas_recrutamento}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                    <tfoot><td colSpan='7'>Recrutadores do servidor</td></tfoot>
                </table>
            </div>
        </DivLista>

    )

}