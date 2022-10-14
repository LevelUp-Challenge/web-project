import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DivinputSingle } from '../../../style/styled';

// import { Container } from './styles';

function FormCerti() {

    let {id} = useParams()

    const [novoCerti, setNovoCerti] = useState({
        
    })

    const handleChange = e =>{
        setNovoCerti({...novoCerti, [e.target.name]:e.target.value})
    }

    let metodo = 'post'

    if (id) {
        metodo = 'put'
    }

    const handleSubmit = e =>{
        e.preventDefault()

        fetch(`http://localhost:8080/LevelUpApp/rest/certificados/${id ? id : ""}`,{
            method:metodo,
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(novoCerti)
        }).then(()=>{
            alert("Inserido com sucesso!")
            window.location = "/candidato"
        })
    }

  return (
    <form action="">
        <DivinputSingle>
            <input 
                type='text'
                id='curso'
                name='curso'
                className='inputText bgWhite'
                value={novoCerti.curso}
                onChange={handleChange}
                required 
            />
            <label htmlFor='curso'>Curso</label>
        </DivinputSingle>
        <DivinputSingle>
            <input 
                type='text'
                id='descricao'
                name='descricao'
                className='inputText bgWhite'
                value={novoCerti.descricao}
                onChange={handleChange}
                required 
            />
            <label htmlFor='descricao'>Descrição</label>
        </DivinputSingle>
        <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
}

export default FormCerti;