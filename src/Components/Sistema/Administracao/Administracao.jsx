import React from "react";
import '../../../css/Administracao.css'
import Input from "../../Form//Input";
import Submit from "../../Form/Submit";
import TextArea from "../../Form/TextArea";

const Administracao = () => {
    return (
        <>
            <section className="administracao">
                <div className="container">
                    <div className="box">
                        <h3>Cadastro de Recrutadores</h3>
                        <form action="">
                            <Input 
                                type='text'
                                nome='nome'
                                label='Nome'
                                cor='white'
                            />
                            <Input 
                                type='email'
                                nome='email'
                                label='Email'
                                cor='white'
                            />
                            <Input 
                                type='number'
                                nome='telefone'
                                label='Telefone'
                                cor='white'
                            />
                            <Input 
                                type='number'
                                nome='cpf'
                                label='CPF'
                                cor='white'
                            />
                            <Input 
                                type='text'
                                nome='sexo'
                                label='Sexo'
                                cor='white'
                            />
                            <Input
                                type='date'
                                nome='datanascimento'
                                placeholder='Data de nascimento'
                                cor='white'
                            />
                            <TextArea 
                                nome='areas'
                                placeholder='Digite as áreas do recrutador'
                            />
                            <Input
                                type='text'
                                nome='login'
                                label='Login'
                                cor='white'
                            />
                            <Input
                                type='text'
                                nome='senha'
                                label='Senha'
                                cor='white'
                            />
                            <Submit 
                                destino='/'
                                valor='Enviar' 
                            />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Administracao;