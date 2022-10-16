import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SectionCadastro } from '../../style/styled';
import Input from '../Form/Input';
import Submit from '../Form/Submit';

const CadastroUsuario = ()=>{

    let {id} = useParams

    const [novoCandidato, setNovoCandidato] = useState({
        nome:"",
        sexo:"",
        dataNasc:"",
        telefone:"",
        login:"",
        senha:""
    })

    let metodo = "post"

    const handleChange = e =>{
        setNovoCandidato({...novoCandidato, [e.taget.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        fetch(`http://localhost:8080/LevelUpApp/rest/candidato/${id ? id : ""}`, {
            method: metodo, 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoCandidato)
        }).then(()=> {
            
        })
    }

    // useEffect(()=>{
    //     if(id){
    //         fetch(`http://localhost:8080/LevelUpApp/rest/candidato/${id}`)
    //         .then((resp)=>{
    //             return(resp.json())
    //         }).then(data=>{
    //             setNovoCandidato(data)
    //         })
    //     }
    // })

    return(
        <SectionCadastro>
            <form onSubmit={handleSubmit}>
                    <h2>Olá, tudo bem?</h2>
                    <h2>Para começarmos e você ter acesso ao <span>LevelUp</span>, por favor faça o cadastro no nosso sistema:</h2>
                    <Input
                        type='text'
                        name='nome'
                        label='Nome Completo'
                        value={novoCandidato.nome}
                        onChange={handleChange}
                        cor='black'
                    />
                    <Input
                        type='text'
                        name='email'
                        label='Email'
                        value={novoCandidato.login}
                        onChange={handleChange}
                        cor='black'
                    />
                    <Input
                        type='text'
                        name='senha'
                        label='Senha'
                        value={novoCandidato.senha}
                        onChange={handleChange}
                        cor='black'
                    />
                    <Input
                        type='text'
                        name='telefone'
                        label='telefone'
                        value={novoCandidato.telefone}
                        onChange={handleChange}
                        cor='black'
                    />
                     <Input
                        type='text'
                        nome='dataNasc'
                        label='data de nascimento'
                        value={novoCandidato.dataNasc}
                        onChange={handleChange}
                        cor='black'
                    />
                    {/* <Submit 
                        destino='/login'
                        valor='Cadastrar'
                    /> */}
                    <button>Enviar</button>
                </form>
        </SectionCadastro>
    )
};

export default CadastroUsuario;