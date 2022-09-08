import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/Header.css'
import Banner from '../Banner/Banner'
import '../../../img/onda-preta.svg'

const App = ()=>{
    return(
        <>
            <Banner />
            <header>
                <div className="container">
                    <div className="logo">LevelUp Experience</div>
                    <nav className="menu">
                        <ul className="menu">
                            <li><Link to='/'>Página inicial</Link></li>
                            <li><Link to='/login' target='_blank'><span>Fazer Login</span></Link></li>
                        </ul>
                    </nav>
                </div>
            </header>     
        </>
    )
};

export default App;