import React from "react";
import { SectionVagas } from "../../../style/styled";
import VagaSingle from "./VagaSingle";

const Vagas = ()=>{
    return (
        <SectionVagas>
            <div className="container">
                <h2 className="title">Vagas</h2>
                <div className="flex">
                    <VagaSingle />
                    <VagaSingle />
                    <VagaSingle />
                </div>
            </div>
        </SectionVagas>
    )
}

export default Vagas;