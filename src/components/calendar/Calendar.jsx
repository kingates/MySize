import React from "react";
import ReactCalendar from 'react-calendar';
import styles from './Calendar.scss';

const Tile = ({ moodHistoryEntry  }) => {
  if (!moodHistoryEntry) {
    return null;
  }

  return <div>
    { moodHistoryEntry.type }
  </div>
}

const Calendar = ({ date, moodHistory, onDateChange }) => (
  <div className={styles.mainCalendar}>
    <ReactCalendar
      tileContent={({ date }) => <Tile moodHistoryEntry={moodHistory[date.toISOString()]}/>}
      onChange={ onDateChange }
      value={ date }
    />
    <span>{ date + "" } </span>
  </div>
);


export default Calendar;
