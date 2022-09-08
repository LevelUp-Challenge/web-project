import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/Submit.css'

const Submit = (props)=>{
    return (
        <>
            <Link to={props.destino}><input type="submit" value={props.valor} /></Link>
        </>
    )
};

export default Submit;