import React from 'react'
import '../css/TextArea.css'

const TextArea = (props)=>{
    return(
        <>
            <div className="textAreaSingle">
                <textarea name={props.nome} id={props.nome} placeholder={props.placeholder}></textarea>
            </div>
        </>
    )
};

export default TextArea;