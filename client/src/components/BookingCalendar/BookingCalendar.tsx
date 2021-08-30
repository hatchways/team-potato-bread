import { useState } from 'react';
import { Paper, IconButton } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, Calendar } from '@material-ui/pickers';
import useStyles from './useStyles';
import { MuiThemeProvider } from '@material-ui/core';
import { calendarTheme } from './calendarTheme';
//TODO: pass props and update bookedDate to update current bookedDates if user (sitter)
const BookingCalendar = (): JSX.Element => {
  const classes = useStyles();
  const [bookedDates, setBookedDates] = useState(['8/13/2021', '8/16/2021', '9/16/2021']);

  function getBookedDayElement([...props]): JSX.Element {
    const day = props[0];
    const selectedDate = props[1];
    const dayInCurrentMonth = props[2];
    const date = `${day.getMonth() + 1}/${day.getDate()}/${day.getFullYear()}`;
    const today = `${selectedDate.getMonth() + 1}/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
    let datesButton;
    if (bookedDates.indexOf(date) >= 0) {
      datesButton = (
        <IconButton className={classes.selectedDate}>
          <span> {day.getDate()} </span>
        </IconButton>
      );
    } else if (date === today && dayInCurrentMonth) {
      datesButton = (
        <IconButton className={classes.today}>
          <span> {day.getDate()} </span>
        </IconButton>
      );
    } else {
      datesButton = (
        <IconButton className={dayInCurrentMonth ? classes.dateButton : classes.notInMonth}>
          <span> {day.getDate()} </span>
        </IconButton>
      );
    }
    return datesButton;
  }

  return (
    <MuiThemeProvider theme={calendarTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Paper elevation={3} className={classes.calendar}>
          <Calendar
            date={new Date()}
            onChange={() => {
              return;
            }}
            renderDay={(...props) => getBookedDayElement([...props])}
          />
        </Paper>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
};

export default BookingCalendar;
