import React, { useContext } from 'react';
import { Context } from '../hookAndContext/context';
import { useForm } from 'react-hook-form';

const CareSignup = () => {
    const careSignupContext = useContext(Context);
    const { handleSubmit , register } = useForm();
    const { currentUser, handleSubmitForm, message } = careSignupContext;
    const onData = (thedata) => { handleSubmitForm(thedata, "caresignup") };
    

    return (
        <form onSubmit={handleSubmit(onData)}>
        <label></label>
        <input type='' name=''></input>

        <label></label>
        <input type='' name=''></input>
        </form>
    )
}

export default CareSignup;