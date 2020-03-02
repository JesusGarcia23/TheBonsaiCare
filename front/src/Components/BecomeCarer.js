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
            
            </form>
            </div>
        )

    }else {
        return null;
    }
   
}

export default BecomeCarer;