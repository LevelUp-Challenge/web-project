import React from 'react'
import '../../css/CadastroUsuario.css'
import Input from '../Form/Input';
import Submit from '../Form/Submit';

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
                        cor='black'
                    />
                    <Input
                        type='email'
                        nome='email'
                        label='Email'
                        cor='black'
                    />
                    <Input
                        type='password'
                        nome='senha'
                        label='Senha'
                        cor='black'
                    />
                    <Input
                        type='password'
                        nome='senha'
                        label='Confirme a senha'
                        cor='black'
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