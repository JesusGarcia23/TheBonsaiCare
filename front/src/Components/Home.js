import React, {useContext} from 'react';
import Context from '../hookAndContext/context';

const Home = (props) => {
    const homeContext = useContext(Context);
    const {currentUser, handleSubmitForm, message} = homeContext;


    if(currentUser) {
        return (
            <div>Homepage</div>
        )
    }
    else {
        return (
            <div>Log in or Sign up Please</div>
        )
    }
}

export default Home;