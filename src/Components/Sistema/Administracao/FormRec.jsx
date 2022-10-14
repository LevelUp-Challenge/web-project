import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DivinputSingle } from '../../../style/styled';

const CadastroRec = ()=> {

    let {id} = useParams()

    const [novoRec, setNovoRec] = useState({
        
    })

    let metodo = 'post'

    if (id) {
        metodo = 'put'
    }

    const handleChange = e =>{
        setNovoRec({...novoRec, [e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()

        fetch(`http://localhost:8080/LevelUpApp/rest/recrutador/${id ? id : ""}`,{
            method:metodo,
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(novoRec)
        }).then(()=>{
            alert("Inserido com sucesso!")
            window.location = "/adm"
        })
    }

    useEffect(()=>{
        if (id) {
            fetch(`http://localhost:8080/LevelUpApp/rest/recrutador/${id}`)
            .then((resp)=>{
                return (resp.json())
            }).then(data =>{
                setNovoRec(data)
            })
        }
    }, [id])

  return (
    <form onSubmit={handleSubmit}>
        <DivinputSingle>
            <input 
                type='text'
                id='nome'
                name='nome'
                className='inputText bgWhite'
                value={novoRec.nome}
                onChange={handleChange}
                required 
            />
            <label htmlFor='nome'>Nome</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='login'
                name='login'
                className='inputText bgWhite'
                value={novoRec.login}
                onChange={handleChange}
                required 
            />
            <label htmlFor='login'>Login</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='password'
                id='senha'
                name='senha'
                className='inputText bgWhite'
                value={novoRec.senha}
                onChange={handleChange}
                required 
            />
            <label htmlFor='senha'>Senha</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='areas_recrutamento'
                name='areas_recrutamento'
                className='inputText bgWhite'
                value={novoRec.areas_recrutamento}
                onChange={handleChange}
                required 
            />
            <label htmlFor='areas_recrutamento'>Areas de recrutamento</label>
        </DivinputSingle>
        <button>Enviar</button>
    </form>
  )
}

export default CadastroRec;