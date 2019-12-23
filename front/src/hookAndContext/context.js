import React, {useState} from 'react'
import * as io from 'socket.io-client'

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

const {inputs, handleInputChange, handleSubmit, setInputs } = useForm(handler)

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

