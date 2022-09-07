import React from 'react'
import '../../css/Header.css'
import Banner from '../Banner/Banner'
import '../../img/onda-preta.svg'

const App = ()=>{
    return(
        <>
            <Banner />
            <header>
                <div class="container">
                    <div class="logo">LevelUp Experience</div>
                    <nav class="menu">
                        <ul class="menu">
                            <li><a href="">Página Inicial</a></li>
                            <li><a href=""><span>Fazer Login</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="ondaPreta"></div>       
        </>
    )
};

export default App;