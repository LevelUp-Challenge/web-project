import React from 'react'
import '../../../css/Login.css'
import Input from './Input';

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
                        <input type="submit" value="Logar" />
                        <input type="submit" value="Cadastrar" />
                    </form>
                </div>
            </section>
        </>
    )
};

export default Login;