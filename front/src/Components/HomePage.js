import React, {useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../hookAndContext/context';

const HomePage = (props) => {

    const homeContext = useContext(Context);
    const {currentUser, handleSubmitForm, message} = homeContext;


    if(currentUser) {
        return (
            <div className='homepage'>
            <div className='homepage-section-1'>
            <div  className='home-search-container'>

            <div className='home-search-item-container'>
            <div className='home-search-item' style={styles}>
            <p>Drop-in visit</p></div>
            <div className='home-search-item' style={styles}>
            <p>Bonsai Boarding</p></div>
            </div>
            <button>Search</button>
            </div>
            </div>

            <div className='homepage-section-2'>Section with general information</div>

            <div className='homepage-footer'>Footer</div>
            
            </div>
        )
    }
    else{
        return (
            <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            </div>
        )
    }
}

const styles = {
    'height': '8vh',
    'width': '7vw',
    'border':' 1px solid green',
    'cursor': 'pointer',
}

export default HomePage;