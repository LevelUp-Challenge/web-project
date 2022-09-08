import React from 'react'
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
                            <li><a href="">Página Inicial</a></li>
                            <li><a href="" target="_blank"><span>Fazer Login</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>     
        </>
    )
};

export default App;