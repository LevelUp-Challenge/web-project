import React from 'react';
import '../css/CheckBox.css'

const CheckBox = (props)=>{
    return(
        <>
            <div className="checkBoxSingle">
                <input type="checkbox" name={props.nome} id={props.nome} />
                <label htmlFor={props.nome}>{props.label}</label>
            </div>
        </>
    )
};

export default CheckBox;