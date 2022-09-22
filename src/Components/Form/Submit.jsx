import React from 'react'
import { Link } from 'react-router-dom';
import { DivSubmit } from '../../style/styled';

const Submit = (props)=>{
    return (
        <DivSubmit>
            <Link to={props.destino}><input type="submit" value={props.valor} /></Link>
        </DivSubmit>
    )
};

export default Submit;