import React from "react";
import { SectionFooter } from "../../../style/styled";
import Fiap from '../../../img/fiap.png'
import Ibm from '../../../img/ibm.jpg'

const Footer = ()=>{
    return(
        <>
            <SectionFooter>
                <div class="container">
                    <div className="patrocinadores">
                        <h3>Apoio: </h3>
                        <div className='imgs'>
                            <img src={Fiap} alt="" />
                            <img src={Ibm} alt="" />
                        </div>
                    </div>
                </div>
            </SectionFooter>
        </>
    )
}

export default Footer;