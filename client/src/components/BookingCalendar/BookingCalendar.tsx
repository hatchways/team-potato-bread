import { Paper, IconButton } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, Calendar } from '@material-ui/pickers';
import useStyles from './useStyles';
import { MuiThemeProvider } from '@material-ui/core';
import { calendarTheme } from './calendarTheme';

interface DatesProps {
  dates: string[];
}

const BookingCalendar: React.FC<DatesProps> = ({ dates }): JSX.Element => {
  const classes = useStyles();
  function getBookedDayElement([...props]): JSX.Element {
    const day = props[0];
    const dayInCurrentMonth = props[2];
    const date = day.toGMTString().slice(5, 16).trim().toUpperCase();
    let datesButton;
    if (dayInCurrentMonth && dates.indexOf(date) >= 0) {
      datesButton = (
        <IconButton className={classes.selectedDate}>
          <span> {day.getDate()} </span>
        </IconButton>
      );
    } else if (dayInCurrentMonth && day.toDateString() === new Date().toDateString()) {
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
