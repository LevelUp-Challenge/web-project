import React from 'react'
import { DivtextAreaSingle } from '../../style/styled';

const TextArea = (props)=>{
    return(
        <DivtextAreaSingle>
            <textarea name={props.nome} id={props.nome} placeholder={props.placeholder}></textarea>
        </DivtextAreaSingle>
    )
};

export default TextArea;