import React from "react";
import { Link } from "react-router-dom";
import { SectionMenu } from "../../style/styled";

const Menu = ()=>{
    return (
        <SectionMenu>
            <nav>
                    <ul>
                        <li><Link to='/levelup'>Home</Link></li>
                        <li><Link to='/recrutador'>Recrutador</Link></li>
                        <li><Link to='/candidato'>Candidato</Link></li>
                        <li><Link to='/adm'>Administração</Link></li>
                        <li><Link to='/vagas'>Vagas </Link></li>
                    </ul>
                </nav>
        </SectionMenu>
    )
};

export default Menu;