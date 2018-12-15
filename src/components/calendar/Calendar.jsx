import React from "react";
import ReactCalendar from 'react-calendar';

const Calendar = ({ date, moodHistory, onDateChange }) => (
  <div>
    <ReactCalendar
      onChange={ onDateChange }
      value={ date }
    />
    <span>{ date + "" } </span>
  </div>
);

export default Calendar;
