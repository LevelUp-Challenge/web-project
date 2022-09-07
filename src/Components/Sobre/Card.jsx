import React from 'react'
import '../../css/Card.css'

const Card = (props)=>{

    return(
        <>
            <div className="participantes">
                <div className="flex">
                    <div className="imgPartipante" style={{ backgroundImage: props.foto }}></div>
                    <div className="infos">
                        <h2>{props.nome}</h2>
                        <p><b>GitHub: </b><a href={props.linkGitHub} target="_blank">{props.nomeGitHub}</a></p>
                        <p><b>Linkedin: </b><a href={props.linkLinkedin} target="_blank">{props.nomeLinkedin}</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;