import React, { useState, useContext } from 'react';
import { Context } from '../hookAndContext/context';
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom';

const CreateBonsai = (props) => {

    const createContext = useContext(Context);
    console.log(createContext);

    const [ imagePreview, setImagePreview ] = useState("");

    const { setImageUpload, uploadNewImage, handleSubmitForm, done } = createContext;
    const { handleSubmit , register } = useForm();
    const onData = (thedata) => { handleSubmitForm(thedata, "createBonsai", props) };

    const handleImage = (event) => {
        event.preventDefault();
        let theFile = event.target.files[0]
        if(event.target.files[0] && event.target.files[0].size <= 10485760) {
            let newImg = URL.createObjectURL(event.target.files[0]);
            setImagePreview(newImg);
            setImageUpload(theFile);

        }
    }

    return(
        <div>
        <img style={{width: 300, height: 300}} src={imagePreview}></img>
        <form onSubmit={handleSubmit(onData)}>
        <label></label>
        <input type='file' name="imageUrl" onChange={e => handleImage(e)}></input>

        <label>Description</label>
        <input type='text' name='bonsaiDescription' placeholder='(Optional)' ref={register}></input>
        <button>Save</button>
        </form>
        </div>
    )
}


export default CreateBonsai;