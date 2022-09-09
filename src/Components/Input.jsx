import React from 'react'
import '../css/Input.css'

const Input = (props)=>{

    function background(props) {
        if (props.cor == 'black') {
            return 'inputText bgBlack'
        }else if (props.cor == 'white') {
            return 'inputText bgWhite'
        }
    }

    return(
        <>
            <div className="inputSingle">
                <input 
                    type={props.type} 
                    id={props.nome} 
                    name={props.nome} 
                    className={background(props)} 
                    placeholder={props.placeholder}
                    required 
                />
                <label htmlFor={props.nome}>{props.label}</label>
            </div>
        </>
    )
};

export default Input;