import React, {useContext} from 'react';
import {Context} from '../hookAndContext/context';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const signupContext = useContext(Context);
    const { handleSubmit, register, reset, errors} = useForm();
    const {currentUser, handleSubmitForm, message, done} = signupContext;
    const onData = (thedata, e) => { 
        if(done === true) e.target.reset();
        handleSubmitForm(thedata, "signup")
    };

return(
    <form onSubmit={handleSubmit(onData)}>
    <h1>Signup</h1>
    <label htmlFor='firstName'>First name</label>
    <input type='text' name='firstName' ref={register}></input>

    <label htmlFor='lastName'>Last name</label>
    <input type='text' name='lastName' ref={register}></input>

    <label htmlFor='email'>Email</label>
    <input type='email' name='email' ref={register}></input>
    {message !== "" ? <span style={{color: 'red'}}>{message}</span> : null}

    <label htmlFor='password'>Password</label>
    <input type='password' name='password' ref={register}></input>

    <button>Sign Up</button>
    </form>
)
}

export default Signup;