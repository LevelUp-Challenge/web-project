import React from 'react'
import { DivinputSingle } from '../../style/styled';

const Input = (props)=>{

    function background(props) {
        if (props.cor == 'black') {
            return 'inputText bgBlack'
        }else if (props.cor == 'white') {
            return 'inputText bgWhite'
        }
    }

    return(
        <DivinputSingle>
            <input 
                type={props.type} 
                id={props.nome} 
                name={props.nome} 
                className={background(props)} 
                placeholder={props.placeholder}
                required 
            />
            <label htmlFor={props.nome}>{props.label}</label>
        </DivinputSingle>
    )
};

export default Input;