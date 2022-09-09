import React from 'react'
import '../../css/Sistema.css'
import Conteudo from './Conteudo';
import Menu from './Menu';

const Sistema = ()=>{
    return (
        <>
            <Menu />
            <Conteudo />
            <div className="clear"></div>
        </>
    )
};

export default Sistema;