import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-dom'



const CadastroRecrutador = ()=> {

    let {id} = useParams

        const [] = useState({
            id: id.CadastroRecrutador, 
            nome:"",
            sexo:"",
            dataNascimento:"", 
            login:"",
            senha:"",
            tel:"",
        })
        
        let metodo = "post"

        const handleChange = e =>{
            setNewRecrutador({...newRecrutador, [e.taget.name]:e.target.value})
        }

        const handleSubmit = e => {
            e.preventDefault()
    
            fetch(`http://localhost:8080/LevelUpApp/rest/recrutador/${id ? id : ""}`, {
                method: metodo, 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newRecrutador)
            }).then(()=> {
                
            })
        }

        return(
            <SectionCadastro>
                <form onSubmit={handleSubmit}>
                        <h2>Olá, tudo bem?</h2>
                        <h2>Para começarmos e você ter acesso ao <span>LevelUp</span>, por favor faça o cadastro no nosso sistema:</h2>
                        <Input
                            type='text'
                            name='nome'
                            label='Nome Completo'
                            value={newRecrutador.nome}
                            onChange={handleChange}
                            cor='black'
                        />
                        <Input
                            type='text'
                            name='email'
                            label='Email'
                            value={newRecrutador.login}
                            onChange={handleChange}
                            cor='black'
                        />
                        <Input
                            type='text'
                            name='senha'
                            label='Senha'
                            value={newRecrutador.senha}
                            onChange={handleChange}
                            cor='black'
                        />
                        <Input
                            type='text'
                            name='tel'
                            label='telefone'
                            value={newRecrutador.tel}
                            onChange={handleChange}
                            cor='black'
                        />
                         <Input
                            type='text'
                            nome='dataNascimento'
                            label='data de nascimento'
                            value={newRecrutador.dataNascimento}
                            onChange={handleChange}
                            cor='black'
                        />
                        <button>Enviar</button>
                    </form>
            </SectionCadastro>
        )


   
} 