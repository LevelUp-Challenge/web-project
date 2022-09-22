import React from 'react'
import { SectionLogin } from '../../style/styled';
import Input from '../Form/Input';
import Submit from '../Form/Submit';

const Login = ()=>{
    return (
        <SectionLogin>
            <div className="foto">

            </div>
            <div className="form">
                <form action="">
                    <Input 
                        type='text'
                        nome='login'
                        label='Label'
                        cor='black'
                    />
                    <Input 
                        type='password'
                        nome='senha'
                        label='Senha'
                        cor='black'
                    />
                    <a href="">Esqueci a senha.</a>
                    <Submit 
                        destino='/levelup'
                        valor='Logar'
                    />
                    <Submit 
                        destino='/cadastro-usuario'
                        valor='Fazer cadastro'
                    />
                </form>
            </div>
        </SectionLogin>
    )
};

export default Login;