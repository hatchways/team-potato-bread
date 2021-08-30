import Grid from '@material-ui/core/Grid';
import MgnBookingHeader from '../../components/MgnBookingHeader/MgnBookingHeader';
import BookingCalendar from '../../components/BookingCalendar/BookingCalendar';
import BookingList from '../../components/BookingList/BookingList';
import useStyles from './useStyles';
import { useState } from 'react';

export default function MyBookings(): JSX.Element {
  const classes = useStyles();
  const [bookings, setBookings] = useState([]);
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
