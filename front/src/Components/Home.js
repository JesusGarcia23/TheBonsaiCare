import React, {useContext, Link} from 'react';
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
            <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            </div>
        )
    }
}

export default Home;