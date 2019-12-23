import React, {useState, useEffect} from 'react'
import * as io from 'socket.io-client'
import api from '../services/api'
import useForm from './hookForm'

const Context = React.createContext()

const socket = io('http://localhost:5000')

const Provider = (props) => {

    const {
        currentUser: initialCurrentUser
    } = props

const [ currentUser, setCurrentUser ] = useState(initialCurrentUser)

const logIn = () => {
    api.post('/login', inputs, {withCredentials: true})
    .then(response => {
        setCurrentUser(response.data.user)
    }).then(() => {
        setInputs(inputs => ({...inputs, username: "", password: ""}))
    }).catch(err => console.error(`an unexpected error ocurred ${err}`))
}


const handler = (data, props) => {
    switch(data){
        case "login":
            logIn();
            break;
        default:
            return null;
            break;    
    }
}

const {inputs, handleInputChange, handleSubmit, setInputs } = useForm(handler)

useEffect(() => {
    socket.emit('init_communication')
    api.get('/loggedin', {withCredentials: true})
    .then(response => {
        setCurrentUser(response.data)
    }).catch(err => {
        console.error(err)
    })
    socket.on('reload', reload)
})

const logOut = () => {
    setCurrentUser(null)
}

const reload = () => socket.emit('init_communication')

const data = {
    currentUser,
    handleInputChange,
    handleSubmit,
    inputs,
    setInputs,
    logOut
}

return <Context.Provider value={data}>{props.children}</Context.Provider>

}

export {Context, Provider}

