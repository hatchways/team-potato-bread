import React, { useState } from 'react';
import { Paper, IconButton } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, Calendar } from '@material-ui/pickers';
import useStyles from './useStyles';

const BookingCalendar = (): JSX.Element => {
  const classes = useStyles();
  const [bookedDates, setBookedDates] = useState(['8/13/2021', '8/16/2021', '9/16/2021']);

  const handleDateChange = (): boolean => {
    return true;
  };

  function getBookedDayElement(day: Date, selectedDate: Date, dayInCurrentMonth: boolean): JSX.Element {
    const date = `${day.getMonth() + 1}/${day.getDate()}/${day.getFullYear()}`;
    let datesButton: JSX.Element;
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
        <Calendar date={new Date()} onChange={handleDateChange} renderDay={getBookedDayElement} />
      </Paper>
    </MuiPickersUtilsProvider>
  );
};

export default BookingCalendar;
