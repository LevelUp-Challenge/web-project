import React from "react";
import { Link } from "react-router-dom";
import { SectionMenu } from "../../style/styled";

const Menu = ()=>{
    return (
        <SectionMenu>
            <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Recrutador</Link></li>
                        <li><Link to='/'>Candidato</Link></li>
                        <li><Link to='/'>Administração</Link></li>
                    </ul>
                </nav>
        </SectionMenu>
    )
};

export default Menu;