import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DivinputSingle } from '../../../style/styled';


const FormDessafio = ()=> {

    let {id} = useParams()

    const [novoDesafio, setNovoDesafio] = useState({
        
    })

    const handleChange = e =>{
        setNovoDesafio({...novoDesafio, [e.target.name]:e.target.value})
    }

    let metodo = 'post'

    if (id) {
        metodo = 'put'
    }

     const handleSubmit = e =>{
        e.preventDefault()

        fetch(`http://localhost:8080/LevelUpApp/rest/recrutador/${id ? id : ""}`,{
            method:metodo,
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(novoDesafio)
        }).then(()=>{
            alert("Inserido com sucesso!")
            window.location = "/recrutador"
        })
    }

  return (
    <form action="">
        <DivinputSingle>
            <input 
                type='text'
                id='status'
                name='status'
                className='inputText bgWhite'
                value={novoDesafio.status}
                onChange={handleChange}
                required 
            />
            <label htmlFor='status'>Status</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='tempoAplicacao'
                name='tempoAplicacao'
                className='inputText bgWhite'
                value={novoDesafio.tempoAplicacao}
                onChange={handleChange}
                required 
            />
            <label htmlFor='tempoAplicacao'>Tempo Aplicacao</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='aprovavcao'
                name='aprovavcao'
                className='inputText bgWhite'
                value={novoDesafio.aprovavcao}
                onChange={handleChange}
                required 
            />
            <label htmlFor='aprovavcao'>Aprovação</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='number'
                id='pontuacao'
                name='pontuacao'
                className='inputText bgWhite'
                value={novoDesafio.pontuacao}
                onChange={handleChange}
                required 
            />
            <label htmlFor='pontuacao'>Aprovação</label>
        </DivinputSingle>
        <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
}

export default FormDessafio;