import React from 'react'
import '../css/Input.css'

const Input = (props)=>{
    return(
        <>
            <div className="inputSingle">
                <input type={props.type} id={props.nome} name={props.nome} className='inputText' required />
                <label htmlFor={props.nome}>{props.label}</label>
            </div>
        </>
    )
};

export default Input;