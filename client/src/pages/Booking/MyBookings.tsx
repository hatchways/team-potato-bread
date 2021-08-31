import Grid from '@material-ui/core/Grid';
import MgnBookingHeader from '../../components/MgnBookingHeader/MgnBookingHeader';
import BookingCalendar from '../../components/BookingCalendar/BookingCalendar';
import BookingList from '../../components/BookingList/BookingList';
import useStyles from './useStyles';
import { useState, useEffect } from 'react';
import data from './mockData';
import { User } from '../../interface/User';
import React from 'react';

export interface Bookings {
  id: string;
  date: string;
  time: string;
  username: string;
  url: string;
  accepted: boolean;
  declined: boolean;
}

const MyBookings: React.FC<User> = (): JSX.Element => {
  const classes = useStyles();
  const [bookings, setBookings] = useState<Bookings[]>();
  const [dates, setDates] = useState<string[]>();

  useEffect(() => {
    setBookings(data);
    const bookingDates = data.map((booking) => {
      return booking.date.trim();
    });
    setDates(bookingDates);
  }, []);

  return (
    <Grid container>
      <MgnBookingHeader />
      <Grid container className={classes.myBooking} spacing={2}>
        {bookings && <BookingList />}
        {dates && <BookingCalendar dates={dates} />}
      </Grid>
    </Grid>
  );
};
export default MyBookings;
