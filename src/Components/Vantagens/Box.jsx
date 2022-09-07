import React from 'react'
import '../../css/Box.css'

const Box = (props)=>{

    function lado(props) {
        if (props.lado == 'left') {
            return 'box left'
        } else if (props.lado == 'right') {
            return 'box right'
        }
    }

    return(
        <>
            <div className={lado(props)}>
                <h3>Titulo</h3>
                <p>Descrição</p>
            </div>
        </>
    )
};

export default Box;