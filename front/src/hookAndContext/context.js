import React, { useState, useEffect } from 'react'
import * as io from 'socket.io-client'
import api from '../services/api'
import useForm from './hookForm'

const Context = React.createContext()

const socket = io('http://localhost:5000')

const Provider = (props) => {

const { currentUser: initialCurrentUser } = props

const [ currentUser, setCurrentUser ] = useState(initialCurrentUser)

const logIn = ({email, password}) => {
    api.post('/login', {email, password}, {withCredentials: true})
    .then(response => {
        setCurrentUser(response.data.user)
    }).then(() => {
        setInputs(inputs => ({...inputs, username: "", password: ""}))
    }).catch(err => console.error(`an unexpected error ocurred ${err}`))
}


const handler = (data, type, props) => {
    switch(type){
        case "login":
            logIn(data);
            break;
        default:
            return null;   
    }
}

const {inputs, handleInputChange, handleSubmitForm, setInputs } = useForm(handler)

useEffect(() => {
    socket.emit('init_communication')
    api.get('/loggedin', {withCredentials: true})
    .then(response => {
        setCurrentUser(response.data)
    }).catch(err => {
        console.error(err)
    });
    // socket.on('reload', reload)
}, [])

const logOut = () => {
    api.delete('/logout', {withCredentials: true})
    .then(response => {
        setCurrentUser(null)
    }).catch(err => console.error(`An error happened while trying to log out`))
   
}

// const reload = () => socket.emit('init_communication')

const data = {
    currentUser,
    handleInputChange,
    handleSubmitForm,
    inputs,
    setInputs,
    logOut
}

return <Context.Provider value={data}>{props.children}</Context.Provider>

}

export {Context, Provider}

