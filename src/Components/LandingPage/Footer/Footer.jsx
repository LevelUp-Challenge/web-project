import React from 'react'
import Fiap from '../../../img/fiap.png'
import Ibm from '../../../img/ibm.jpg'
import '../../../css/Footer.css'

const Footer = ()=>{
    return(
        <>
            <footer>
                <div class="container">
                    <div className="patrocinadores">
                        <h3>Apoio: </h3>
                        <div>
                            <img src={Fiap} alt="" />
                            <img src={Ibm} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;