import React, {useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../hookAndContext/context';

const HomePage = (props) => {

    const div1 = document.getElementsByClassName('home-search-container');

    const div2 = document.getElementsByClassName('home-search-container-2');

    const homeContext = useContext(Context);
    const {currentUser, handleSubmitForm, message} = homeContext;

    let [ isDropSelected, setIsDropSelected ] = useState(false);

    let [ isBoardingSelected, setIsBoardingSelected ] = useState(false);

    let optionSelected = isDropSelected || isBoardingSelected;

    const switchDiv = (e, move) => {
        e.preventDefault();
        switch(move) {
            case 'first': {
                div1[0].style.display = 'flex';
                div2[0].style.display = 'none';
                break;
            }
            case 'second': {
                div2[0].style.display = 'flex';
                div1[0].style.display = 'none';
                break;
            }
            default: {
                return;
            }
        }
    }

    const selectBox = (option) => {
        switch(option) {
            case 'dropin': {
                setIsDropSelected(true);
                setIsBoardingSelected(false);
                break;
            }
            case 'boarding': {
                setIsBoardingSelected(true);
                setIsDropSelected(false);
                break;
            }
            default: {
                return;
            }
        }
    }

    if(currentUser) {
        return (
            <div id='homepage'>
            <div id='homepage-section-1'>
            <div className='home-search-container'>
            <div className='home-search-item-container'>
            <div className='home-search-item' style={{ height: '8vh', width:'7vw', border:`1px solid ${isDropSelected ? 'red' : 'green'}`, 
            cursor: 'pointer', color: isDropSelected ? 'red' : 'green'}} onClick={e => selectBox('dropin')}>
            <p>Drop-in visit</p></div>
            <div className='home-search-item' style={{ height: '8vh', width:'7vw', border:`1px solid ${isBoardingSelected ? 'red' : 'green'}`, 
            cursor: 'pointer', color: isBoardingSelected ? 'red' : 'green'}} onClick={e => selectBox('boarding')}>
            <p>Bonsai Boarding</p></div>
            </div>
            <button onClick={e => switchDiv(e, 'second')} disabled={!optionSelected ? true : false} >Continue</button>
            </div>

            <div className='home-search-container-2'>
            <h2>{isDropSelected ? "Drop-in" : "Boarding"}</h2>
            <button onClick={e => switchDiv(e, 'first')}>Go back</button>
            This is second (Calendar and Maintenance services)
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

export default HomePage;