import React, {useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../hookAndContext/context';
import CalendarComponent from './CalendarComponent';


const HomePage = (props) => {

    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
      }

    const div1 = document.getElementsByClassName('home-search-container');

    const div2 = document.getElementsByClassName('home-search-container-2');

    const homeContext = useContext(Context);
    
    const {currentUser, handleSubmitForm, message, firstDate, setFirstDate, secondDate, setSecondDate} = homeContext;

    let [ isDropSelected, setIsDropSelected ] = useState(false);

    let [ isBoardingSelected, setIsBoardingSelected ] = useState(false);

    let [ isTrimming, setIsTrimming ] = useState(false);

    let [ isRepotting, setIsRepotting ] = useState(false);

    let [ isWiring, setIsWiring ] = useState(false);

    let [ isFertilizer, setIsFertilizer ] = useState(false);

    let [ isPest, setIsPest ] = useState(false);

    let optionSelected = isDropSelected || isBoardingSelected;

    let datesSelected = (firstDate !== null && secondDate !== null) || false;

    const updateState = (event) => {
        event.preventDefault();
        const data = {
            isDropSelected,
            isBoardingSelected,
            isTrimming,
            isRepotting,
            isWiring,
            isFertilizer,
            isPest,
        }
        handleSubmitForm(data, "search", props);
    }

    const updateCheckBox = (event) => {
        switch(event.currentTarget.name) {
            case 'trimming': {
                setIsTrimming(!isTrimming);
                break;
            }
            case 'repotting': {
                setIsRepotting(!isRepotting);
                break;
            }
            case 'wiring/styling': {
                setIsWiring(!isWiring);
                break;
            }
            case 'fertilizer': {
                setIsFertilizer(!isFertilizer);
                break;
            }
            case 'insect/pest': {
                setIsPest(!isPest);
                break;
            }
            default: {
                return;
            }
        }

    }

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

            <CalendarComponent firstDate={firstDate} secondDate={secondDate} setFirstDate={setFirstDate} setSecondDate={setSecondDate}/>

            <h2>Additional services</h2>

            <div className='home-list-services-container'>
            <ul className="home-list-services">
            <li><input type='checkbox' name='trimming' checked={isTrimming} onChange={e => updateCheckBox(e)}></input>Trimming</li>
            <li><input type='checkbox' name='repotting' checked={isRepotting} onChange={e => updateCheckBox(e)}></input>Repotting</li>
            <li><input type='checkbox' name='wiring/styling' checked={isWiring} onChange={e => updateCheckBox(e)}></input>Wiring/Styling</li>
            <li><input type='checkbox' name='fertilizer' checked={isFertilizer} onChange={e => updateCheckBox(e)}></input>Fertilizer Application</li>
            <li><input type='checkbox' name='insect/pest' checked={isPest} onChange={e => updateCheckBox(e)}></input>Insect/Pest Control</li>
            </ul>
            </div>

            <button onClick={e => updateState(e)} disabled={!datesSelected ? true : false}>
           Continue
            </button>
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

//selectRange={true}

export default HomePage;