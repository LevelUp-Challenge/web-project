import React from 'react'
import { Link } from 'react-router-dom';
import { SectionBanner, SectionHeader } from '../../../style/styled';

const Header = ()=>{
    return(
        <>
            <SectionBanner>
                <div className="img">
                    <div className="container">
                        <div className="texto ">
                            <h1><span>Plataforma</span><span>Gamificada</span>!</h1>
                                        <p>Conectando talentos</p>
                        </div>
                    </div>
                </div>
            </SectionBanner>
            <SectionHeader>
                <div className="container">
                    <div className="logo">LevelUp Experience</div>
                    <nav className="menu">
                        <ul className="menu">
                            <li><Link to='/'>Página inicial</Link></li>
                            <li><Link to='/vagas'>Vagas</Link></li>
                            <li><Link to='/login' target='_blank'><span>Fazer Login</span></Link></li>
                        </ul>
                    </nav>
                </div>
            </SectionHeader>
        </>
    )
}

export default Header;