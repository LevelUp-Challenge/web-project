import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DivinputSingle } from '../../../style/styled';

// import { Container } from './styles';

function FormForma() {

    let {id} = useParams()

    const [novoForma, setNovoForma] = useState({
        
    })

    const handleChange = e =>{
        setNovoForma({...novoForma, [e.target.name]:e.target.value})
    }

    let metodo = 'post'

    if (id) {
        metodo = 'put'
    }

    const handleSubmit = e =>{
        e.preventDefault()

        fetch(`http://localhost:8080/LevelUpApp/rest/Vaga/${id ? id : ""}`,{
            method:metodo,
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(novoForma)
        }).then(()=>{
            alert("Inserido com sucesso!")
            window.location = "/adm"
        })
    }

  return (
    <form action="">
        <DivinputSingle>
            <input 
                type='text'
                id='grauFormacao'
                name='grauFormacao'
                className='inputText bgWhite'
                value={novoForma.grauFormacao}
                onChange={handleChange}
                required 
            />
            <label htmlFor='grauFormacao'>Grau de Formação</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='nmFormacao'
                name='nmFormacao'
                className='inputText bgWhite'
                value={novoForma.nmFormacao}
                onChange={handleChange}
                required 
            />
            <label htmlFor='nmFormacao'>Nome da Formação</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='nmInstituicao'
                name='nmInstituicao'
                className='inputText bgWhite'
                value={novoForma.nmInstituicao}
                onChange={handleChange}
                required 
            />
            <label htmlFor='nmInstituicao'>Nome da Instituição</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='date'
                id='dtInicio'
                name='dtInicio'
                className='inputText bgWhite'
                value={novoForma.dtInicio}
                onChange={handleChange}
                required 
            />
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='date'
                id='ftTermino'
                name='ftTermino'
                className='inputText bgWhite'
                value={novoForma.ftTermino}
                onChange={handleChange}
                required 
            />
        </DivinputSingle>
        <button onClick={handleSubmit}>Enviar</button>
    </form>
  )
}

export default FormForma;