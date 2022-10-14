import React from 'react'
import { DivBoxes } from '../../../style/styled';

const Box = (props)=>{

    function lado(props) {
        if (props.lado === 'left') {
            return 'box left'
        } else if (props.lado === 'right') {
            return 'box right'
        }
    }

    return(
        <>            
            <DivBoxes>
                <div className={lado(props)}>
                    <h3>{props.titulo}</h3>
                    <p>{props.descricao}</p>
                </div>
            </DivBoxes>
        </>
    )
};

export default Box;