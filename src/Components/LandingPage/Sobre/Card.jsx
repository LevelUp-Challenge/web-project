import React from 'react'
import { DivParticipantes } from '../../../style/styled'

const Card = (props)=>{
    
    function classFoto(props) {
        if (props.nome == 'Vinicius de Oliveira') {
            return 'imgPartipante vinicius'
        } else if (props.nome == 'Jhonatas Oliveira') {
            return 'imgPartipante jhonathas'
        } else if (props.nome == 'Gabriel Mira') {
            return 'imgPartipante gabriel'
        } else if (props.nome == 'Nathalia Lopes') {
            return 'imgPartipante nathalia'
        }
    }

    return(
        <>
            <DivParticipantes>
                <div className="flex">
                    <div className={classFoto(props)}></div>
                    <div className="infos">
                        <h2>{props.nome}</h2>
                        <p><b>GitHub: </b><a href={props.linkGitHub} target="_blank">{props.nomeGitHub}</a></p>
                        <p><b>Linkedin: </b><a href={props.linkLinkedin} target="_blank">{props.nomeLinkedin}</a></p>
                    </div>
                </div>
            </DivParticipantes>
        </>
    )
}

export default Card;