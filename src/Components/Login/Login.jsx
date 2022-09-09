import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/Login.css'
import Input from '../Input';
import Submit from '../Submit';

const Login = ()=>{
    return (
        <>
            <section className="login">
                <div className="foto">

                </div>
                <div className="form">
                    <form action="">
                        <Input 
                            type='text'
                            nome='login'
                            label='Label'
                        />
                        <Input 
                            type='password'
                            nome='senha'
                            label='Senha'
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
            </section>
        </>
    )
};

export default Login;