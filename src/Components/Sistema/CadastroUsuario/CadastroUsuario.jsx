import React from 'react'
import '../../../css/CadastroUsuario.css'
import Input from '../Input';
import Submit from '../Submit';

const CadastroUsuario = ()=>{
    return(
        <>
            <section className="cadastro">
                <form action="">
                    <h2>Olá, tudo bem?</h2>
                    <h2>Para começarmos e você ter acesso ao <span>LevelUp</span>, por favor faça o cadastro no nosso sistema:</h2>
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