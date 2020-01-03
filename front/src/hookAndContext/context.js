import React, { useState, useEffect } from 'react'
import * as io from 'socket.io-client'
import api from '../services/api'
import useForm from './hookForm'
import Signup from '../Components/Signup'

const Context = React.createContext()

const socket = io('http://localhost:5000')

const Provider = (props) => {

const { currentUser: initialCurrentUser } = props

const [ imageUpload, setImageUpload ] = useState("");

const [ message, setMessage ] = useState("");

const [ done, setDone ] = useState(false);

const [ currentUser, setCurrentUser ] = useState(initialCurrentUser)

const logIn = ({email, password}) => {

    api.post('/login', {email, password}, {withCredentials: true})
    .then(response => {
        console.log(response)
        if(response.data.message) setMessage(response.data.message);
        else {
            setInputs(inputs => ({...inputs, username: "", password: ""}));
            setMessage("");
            window.location = '/dashboard'
        }
        setCurrentUser(response.data.user)
    }).catch((err) => {console.log(`An unexpected error ocurred while login ${err}`);
})

}

const signUp = ({firstName, lastName, email, password}) => {

    api.post('/signup', {firstName, lastName, email, password})
    .then(response => {
        
        if(response.data.message) setMessage(response.data.message);

        else if(response.data.done) {
             alert("Your account was successfully created!"); 
             window.location = '/login';}

        else { setMessage(""); setDone(response.data.done); }
    }).catch(err => console.error(err));

}


const logOut = () => {
    api.delete('/logout', {withCredentials: true})
    .then(response => {
        setCurrentUser(null);
    }).catch(err => console.error(`An error happened while trying to log out`));
   
}

const newBonsai = ({description}) => {
    api.post('/newBonsai', {description})
    .then(response => {
        console.log(response);
    }).catch(err => console.error(err));
}

const uploadNewImage = async (e) => {
    e.preventDefault();
    console.log(imageUpload)
    const uploadData = new FormData();
    await uploadData.append("imageUrl", imageUpload)
    console.log(uploadData)
    api.post('/uploadNewImg', {imageUrl: imageUpload})
    .then(response => {
        console.log(response)
    }).catch(err => console.error(err))
}

const handler = (data, type, props) => {
    console.log(type)
    switch(type){
        case "login": {
            logIn(data);
            break;
        }

        case "signup": {
            signUp(data);
            break;
        }

        case "newBonsai": {
            newBonsai(data);
            break;
        }
        default:
            return null;   
    }
}

const {inputs, handleInputChange, handleSubmitForm, setInputs } = useForm(handler);

useEffect(() => {
    socket.emit('init_communication')
    api.get('/loggedin', {withCredentials: true})
    .then(response => {
        setCurrentUser(response.data);
    }).catch(err => {
        console.error(err);
    });
    // socket.on('reload', reload)
}, [])


// const reload = () => socket.emit('init_communication')

const data = {
    currentUser,
    handleInputChange,
    handleSubmitForm,
    inputs,
    setInputs,
    logOut,
    message,
    done,
    imageUpload,
    setImageUpload,
    uploadNewImage
}

return <Context.Provider value={data}>{props.children}</Context.Provider>

}

export {Context, Provider}

