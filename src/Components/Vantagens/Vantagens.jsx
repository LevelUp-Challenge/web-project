import React from 'react'
import '../../css/Vantagens.css'
import Box from './Box';

const Vantagem = ()=>{
    return(
        <>
            <section className="vantagens">
                <div className="container">
                    <h2 className="title">Vantagens</h2>
                    <div className="boxs">
                        <Box lado='left' />
                        <Box lado='right' />
                        <Box lado='left' />
                        <Box lado='right' />
                        <Box lado='left' />
                        <div className="clear"></div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Vantagem;