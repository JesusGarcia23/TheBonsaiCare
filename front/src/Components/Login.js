import React, {useContext} from 'react'
import {Context} from '../hookAndContext/context'

const Login = () => {
    const loginContext = useContext(Context)
    
    return(
        <form>
        <h1>Login</h1>
        </form>
    )
}

export default Login;