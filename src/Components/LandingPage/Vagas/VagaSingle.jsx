import React from "react";
import { DivVagaSingle } from "../../../style/styled";

const VagaSingle = ()=>{
    return(
        <DivVagaSingle>
            <h3 className="titulo">Desenvolvedor Front-End</h3>
            <p><b>Senioridade: </b>Júnior</p>
            <p><b>Salário: </b>R$1500,00</p>
            <p><b>Descrição: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut augue risus. Praesent convallis efficitur posuere. Etiam eu tincidunt lorem. Suspendisse potenti. Suspendisse maximus mollis augue, at consequat metus dignissim vel. Pellentesque porta varius leo, ut fringilla est accumsan et. Sed accumsan ex at velit fringilla, a sollicitudin ipsum fermentum.</p>
            <p>
                <b>Requisitos: </b>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </p>
            <button>Inscrever-me</button>
        </DivVagaSingle>
    )
}

export default VagaSingle;