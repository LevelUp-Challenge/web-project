import React from "react";
import { Link } from "react-router-dom";
import '../../css/Menu.css'

const Menu = ()=>{
    return (
        <>
            <section className="menu">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Recrutador</Link></li>
                        <li><Link to='/'>Candidato</Link></li>
                        <li><Link to='/'>Administração</Link></li>
                    </ul>
                </nav>
            </section>
        </>
    )
};

export default Menu;