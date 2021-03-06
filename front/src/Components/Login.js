import React, {useContext} from 'react'
import {Context} from '../hookAndContext/context'
import { useForm } from 'react-hook-form'

const Login = () => {
    const loginContext = useContext(Context);
    const { handleSubmit , register } = useForm();
    const {currentUser, handleSubmitForm, message} = loginContext;
    const onData = (thedata) => { handleSubmitForm(thedata, "login") };

    return(
        <form onSubmit={handleSubmit(onData)}>
        <h1>Login</h1>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' ref={register}></input>

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' ref={register}></input>
        {message !== "" ? <span style={{color: 'red'}}>{message}</span> : null}
        <button>Login</button>
        </form>
    )
}

export default Login;