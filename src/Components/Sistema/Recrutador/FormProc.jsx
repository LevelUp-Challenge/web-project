import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DivinputSingle } from '../../../style/styled';

function FormProc() {

    let {id} = useParams()

    const [novoProc, setNovoProc] = useState({
        
    })

    const handleChange = e =>{
        setNovoProc({...novoProc, [e.target.name]:e.target.value})
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
            body:JSON.stringify(novoProc)
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
                id='nomeVaga'
                name='nomeVaga'
                className='inputText bgWhite'
                value={novoProc.nomeVaga}
                onChange={handleChange}
                required 
            />
            <label htmlFor='nomeVaga'>Nome da Vaga</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='descricaoVaga'
                name='descricaoVaga'
                className='inputText bgWhite'
                value={novoProc.descricaoVaga}
                onChange={handleChange}
                required 
            />
            <label htmlFor='descricaoVaga'>Descrição da Vaga</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='areaVaga'
                name='areaVaga'
                className='inputText bgWhite'
                value={novoProc.areaVaga}
                onChange={handleChange}
                required 
            />
            <label htmlFor='areaVaga'>Área da Vaga</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='beneficiosVaga'
                name='beneficiosVaga'
                className='inputText bgWhite'
                value={novoProc.beneficiosVaga}
                onChange={handleChange}
                required 
            />
            <label htmlFor='beneficiosVaga'>Benefício da Vaga</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='modalidadeVaga'
                name='modalidadeVaga'
                className='inputText bgWhite'
                value={novoProc.modalidadeVaga}
                onChange={handleChange}
                required 
            />
            <label htmlFor='modalidadeVaga'>Modalidade da Vaga</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='pcdAplicavel'
                name='pcdAplicavel'
                className='inputText bgWhite'
                value={novoProc.pcdAplicavel}
                onChange={handleChange}
                required 
            />
            <label htmlFor='pcdAplicavel'>PCD aplicável</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='desafio'
                name='desafio'
                className='inputText bgWhite'
                value={novoProc.desafio}
                onChange={handleChange}
                required 
            />
            <label htmlFor='desafio'>Desafio</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='number'
                id='mediaInscritos'
                name='mediaInscritos'
                className='inputText bgWhite'
                value={novoProc.mediaInscritos}
                onChange={handleChange}
                required 
            />
            <label htmlFor='mediaInscritos'>Media de Inscritos</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='number'
                id='inscritos'
                name='inscritos'
                className='inputText bgWhite'
                value={novoProc.inscritos}
                onChange={handleChange}
                required 
            />
            <label htmlFor='inscritos'>Inscritos</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='number'
                id='salario'
                name='salario'
                className='inputText bgWhite'
                value={novoProc.salario}
                onChange={handleChange}
                required 
            />
            <label htmlFor='salario'>Salario</label>
        </DivinputSingle>
        <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
}

export default FormProc;