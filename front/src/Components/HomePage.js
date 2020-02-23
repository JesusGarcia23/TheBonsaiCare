import React, {useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../hookAndContext/context';
import Calendar from 'react-calendar/dist/entry.nostyle'

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
    const {currentUser, handleSubmitForm, message} = homeContext;

    let [ isDropSelected, setIsDropSelected ] = useState(false);

    let [ isBoardingSelected, setIsBoardingSelected ] = useState(false);

    let [ firstDate, setFirstDate ] = useState(null);

    let [selectedDates, setSelectedDates] = useState([])

    let [ secondDate, setSecondDate ] = useState(null)



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

    const updateDay = (day) => {

        if(firstDate === null) {
            setFirstDate(day)
        }
        else if(firstDate !== null && secondDate === null) {
            console.log("THIS HAPPENED ONLY ONE");
            if(day.getMonth() === firstDate.getMonth() && day.getDate() > firstDate.getDate() 
            || day.getMonth() > firstDate.getMonth()) {
                setSecondDate(day);
            }else {
                setFirstDate(day);
                setSecondDate(firstDate);
            }
        }
        else if(firstDate !== null && secondDate !== null) {
  
            if(day.getMonth() === firstDate.getMonth() &&  day.getDate() === firstDate.getDate()) {
                setFirstDate(secondDate);
                setSecondDate(null);
            }
            else if(day.getMonth() === secondDate.getMonth() &&  day.getDate() === secondDate.getDate()) {
                setSecondDate(null);
            }
            else if(day.getMonth() === secondDate.getMonth() && day.getDate() >= secondDate.getDate() ||  day.getMonth() > secondDate.getMonth()) {
                setSecondDate(day);
            }
            else if(day.getMonth() === firstDate.getMonth() && day.getDate() > firstDate.getDate() && day.getMonth() === secondDate.getMonth() && day.getDate() < secondDate.getDate() ||
             day.getMonth() < secondDate.getMonth() && day.getDate() > firstDate.getDate()) {
                 setSecondDate(day);
             }
             else if(day.getMonth() > firstDate.getMonth() && day.getMonth() === secondDate.getMonth() && day.getDate() < secondDate.getDate()) {
                 setSecondDate(day);
             }
             else if(day.getMonth() > firstDate.getMonth()  && day.getMonth() < secondDate.getMonth()) {
                setSecondDate(day);
             }
             console.log(firstDate);
             console.log(secondDate);
        }

    }

    const changeColor = ({date}) => {
        let startDate = firstDate;
        let endDate =  secondDate;

        if(startDate && date.getMonth() === startDate.getMonth() && date.getDate() === startDate.getDate()){
            return 'selectedDate';
        }

        if(startDate && endDate) {
            if(startDate.getMonth() === endDate.getMonth()) {

                if(date.getMonth() === startDate.getMonth() && date.getDate() >= startDate.getDate() &&
                date.getDate() <= endDate.getDate()) {
                    return 'selectedDate';
                }

            }
            if(startDate.getMonth() < endDate.getMonth()) {
                if(date.getMonth() === startDate.getMonth() && date.getDate() >= startDate.getDate() || date.getMonth() === endDate.getMonth() &&
                date.getDate() <= endDate.getDate() || date.getMonth() < endDate.getMonth() && date.getMonth() > startDate.getMonth()) {
                    return 'selectedDate';
                }
            }
        // if(date.getMonth() === startDate.getMonth() && date.getMonth() === endDate.getMonth()
        //  && date.getDate() >= startDate.getDate() && date.getDate() <= endDate.getDate() || 
        //  date.getMonth() === endDate.getMonth() && date.getDate() <= endDate.getDate() && date.getDate() >= startDate.getDate() ||
        //  startDate.getMonth() < endDate.getMonth() && date.getMonth() === endDate.getMonth() && date.getDate() <= endDate.getDate()) {
        //     return 'selectedDate';
        // }

        }else {
            return null;
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
            <Calendar
            className='myCalendar' value={firstDate} minDate={new Date()} onClickDay={e => updateDay(e)}
            tileClassName={(event) => changeColor(event)}/>
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