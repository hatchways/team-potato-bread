import Grid from '@material-ui/core/Grid';
// import CssBaseline from '@material-ui/core/CssBaseline';
import { Box } from '@material-ui/core';
import MgnBookingHeader from '../../components/MgnBookingHeader/MgnBookingHeader';
import BookingCalendar from '../../components/BookingCalendar/BookingCalendar';
import BookingList from '../../components/BookingList/BookingList';
import useStyles from './useStyles';

export default function MyBookings(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container>
      <MgnBookingHeader />
      <Grid container className={classes.myBooking} spacing={2}>
        <BookingList />
        <BookingCalendar />
      </Grid>
    </Grid>
  );
}
