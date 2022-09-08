import React from "react";
import '../../../css/Banner.css'
import '../../../img/banner.png'

const Banner = ()=>{
    return (
        <>
            <section className="banner">
                <div className="img">
                    <div className="container">
                        <div className="texto ">
                            <h1><span>Aproximando</span>pessoas e <span>conexões</span>!</h1>
                            <p>O sistema que conecta o candidato do recrutador.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Banner;