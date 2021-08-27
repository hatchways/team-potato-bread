import React, { useState } from 'react';
import { Paper, IconButton } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, Calendar } from '@material-ui/pickers';
import useStyles from './useStyles';

const BookingCalendar = (): JSX.Element => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState(['8/13/2021', '8/16/2021', '9/16/2021']);

  const handleDateChange = () => {
    return true;
  };

  function getBookedDayElement(day: DateIOType, selectedDate: DateIOType, dayInCurrentMonth: boolean) {
    let date = `${day.getMonth() + 1}/${day.getDate()}/${day.getFullYear()}`;
    let datesButton = (
      <>
        <IconButton className={dayInCurrentMonth ? classes.dateButton : classes.notInMonth}>
          <span> {date} </span>
        </IconButton>
      </>
    );
    if (bookedDates.indexOf(date) >= 0) {
      datesButton = (
        <>
          <IconButton className={classes.selectedDate}>
            <span> {day.getDate()} </span>
          </IconButton>
        </>
      );
    } else {
      datesButton = (
        <>
          <IconButton className={dayInCurrentMonth ? classes.dateButton : classes.notInMonth}>
            <span> {day.getDate()} </span>
          </IconButton>
        </>
      );
    }
    return datesButton;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Paper elevation={3}>
        <Calendar date={selectedDate} onChange={handleDateChange} renderDay={getBookedDayElement} />
      </Paper>
    </MuiPickersUtilsProvider>
  );
};

export default BookingCalendar;
