import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; 

const CalendarPage = () => {
    const [dateState, setDateSate] = useState(new Date());
    const handleDateChange =(e) =>{
        setDateSate(e);
    }
    return (
        <div className='Sample__container'>
            <div  className="Sample__container__content"><Calendar onChange={handleDateChange} value={dateState} /></div>
            
        </div>
    )
}

export default CalendarPage;