import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../hookAndContext/context';

const HomePage = (props) => {

    const homeContext = useContext(Context);
    const {currentUser, handleSubmitForm, message} = homeContext;

        return (
            <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            </div>
        )
}

export default HomePage;