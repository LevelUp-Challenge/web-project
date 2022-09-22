import React from 'react';
import { DivCheckBoxSingle } from '../../style/styled';

const CheckBox = (props)=>{
    return(
        <>
            <DivCheckBoxSingle>
                <input type="checkbox" name={props.nome} id={props.nome} />
                <label htmlFor={props.nome}>{props.label}</label>
            </DivCheckBoxSingle>
        </>
    )
};

export default CheckBox;