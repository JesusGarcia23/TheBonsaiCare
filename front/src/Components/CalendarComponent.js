import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle'

const CalendarComponent = (props) => {
    console.log(props)
    const {firstDate, secondDate, setFirstDate, setSecondDate} = props;

    const updateDay = (day) => {
        console.log(day.getMonth())
        if(firstDate === null) {
            setFirstDate(day)
        }
        else if(firstDate !== null && secondDate === null) {

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

        }else {
            return null;
        }
    }


    return (
           
        <Calendar
        className='myCalendar' value={firstDate} minDate={new Date()} onClickDay={e => updateDay(e)}
        tileClassName={(event) => changeColor(event)}/>
    )

}

export default CalendarComponent;