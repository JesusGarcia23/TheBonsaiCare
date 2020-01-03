import React, { useContext } from 'react';
import { Context } from '../hookAndContext/context';

const ImageTest = () => {
    const imageContext = useContext(Context)
    const { setImageUpload, uploadNewImage } = imageContext
    console.log(imageContext)

    const fileHandler = (e) => {
        e.preventDefault();
        const theFile = e.target.files[0]
        if(theFile.size <= 10485760){
        const theImg = URL.createObjectURL(theFile)
        setImageUpload(theImg)
        }

    }

    return(
        <form onSubmit={e => uploadNewImage(e)}>
        <label>Image upload</label>
        <input type='file' name="imageUrl" onChange={fileHandler}></input>
        <button>SUBMIT</button>
        </form>
    )
}

export default ImageTest