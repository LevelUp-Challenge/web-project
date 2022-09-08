import React from 'react'
import '../../../css/Cadastro.css'
import Input from '../Input';
import Submit from '../Submit';

const CadastroUsuario = ()=>{
    return(
        <>
            <section className="cadastro">
                <form action="">
                    <Input
                        type='text'
                        nome='nome'
                        label='Nome Completo'
                    />
                    <Input
                        type='email'
                        nome='email'
                        label='Email'
                    />
                    <Input
                        type='password'
                        nome='senha'
                        label='Senha'
                    />
                    <Input
                        type='password'
                        nome='senha'
                        label='Confirme a senha'
                    />
                    <Submit 
                        destino='/login'
                        valor='Cadastrar'
                    />
                </form>
            </section>
        </>
    )
};

export default CadastroUsuario;