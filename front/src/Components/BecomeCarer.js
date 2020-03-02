import React, {useContext} from 'react';
import { Context } from '../hookAndContext/context'
import { useForm } from 'react-hook-form';

const BecomeCarer = (props) => {

    const careContext = useContext(Context);
    const { handleSubmit , register } = useForm();
    const {currentUser, handleSubmitForm, message} = careContext;
    const onData = (thedata) => { handleSubmitForm(thedata, "caresignup") };

    if(currentUser) {
        return (
            <div>
            <h1>Hello Become a Carer page</h1>
            <form onSubmit={handleSubmit(onData)}>

            <h2>Services you provide</h2>
            <label>Drop-in visit</label>
            <input>Boarding</input>

            
            </form>
            </div>
        )

    }else {
        return null;
    }
   
}

export default BecomeCarer;