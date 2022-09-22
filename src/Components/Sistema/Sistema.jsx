import React from 'react'
import { SectionSistema } from '../../style/styled';
import Conteudo from './Conteudo';
import Menu from './Menu';

const Sistema = ()=>{
    return (
        <SectionSistema>
            <Menu />
            <Conteudo />
            <div className="clear"></div>
        </SectionSistema>
    )
};

export default Sistema;