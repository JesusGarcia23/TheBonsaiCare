import React, {useContext} from 'react';
import {Context} from '../hookAndContext/context';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const signupContext = useContext(Context);
    const { handleSubmit , register} = useForm();
    const {currentUser, handleSubmitForm} = signupContext;
    const onData = (thedata) => { handleSubmitForm(thedata, "signup") };
return(
    <form onSubmit={handleSubmit(onData)}>
    <h1>Signup</h1>
    <label htmlFor='email'>Email</label>
    <input type='email' name='email' ref={register}></input>

    <label htmlFor='password'>Password</label>
    <input type='password' name='password' ref={register}></input>
    <button>Login</button>
    </form>
)
}

export default Signup;