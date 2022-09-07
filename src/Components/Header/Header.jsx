import React from 'react'
import '../../css/Header/Header.css'
import Banner from '../Banner/Banner'

const App = ()=>{
    return(
        <>
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
            <Banner />
        </>
    )
};

export default App;