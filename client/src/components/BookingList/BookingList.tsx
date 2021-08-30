import { Box, Paper, Typography } from '@material-ui/core';
import { useState } from 'react';
import useStyles from './useStyles';
import BookingItem from './BookingItem/BookingItem';

const BookingList = (): JSX.Element => {
  const classes = useStyles();
  const [nextBooking, setNextBooking] = useState({
    id: '893829',
    date: '28 Aug 2021',
    time: '10-12 AM',
    username: 'Charles Blank',
    url: 'https://robohash.org/mockLoggedInUser1@gmail.com.png',
    accepted: false,
    declined: false,
  });
  const [currentBookings, setBookings] = useState([
    {
      id: '893232832782',
      date: '29 Aug 2021',
      time: '10-12 AM',
      username: 'Amy Hilton',
      url: 'https://robohash.org/mockLoggedInUser3@gmail.com.png',
      accepted: true,
      declined: false,
    },
    {
      id: '893829',
      date: '30 Aug 2021',
      time: '10-12 AM',
      username: 'Charles Blank',
      url: 'https://robohash.org/mockLoggedInUser@gmail.com.png',
      accepted: false,
      declined: true,
    },
  ]);
  const [pastBookings, setPastBookings] = useState([
    {
      id: '893829',
      date: '5 Aug 2021',
      time: '10-12 AM',
      username: 'Charles Blank',
      url: 'https://robohash.org/mockLoggedInUser1@gmail.com.png',
      accepted: true,
      declined: false,
    },
    {
      id: '893829',
      date: '5 Aug 2021',
      time: '10-12 AM',
      username: 'Charles Blank',
      url: 'https://robohash.org/mockLoggedInUser1@gmail.com.png',
      accepted: true,
      declined: false,
    },
  ]);

  return (
    <Box>
      <Paper elevation={3} className={classes.bookingList}>
        <Typography className={classes.bookingType}>YOUR NEXT BOOKING:</Typography>
        <BookingItem booking={nextBooking} nextBooking={true} key={nextBooking.id} />
      </Paper>
      <Paper elevation={3} className={classes.bookingList}>
        <Typography className={classes.bookingType}>CURRENT BOOKINGS:</Typography>
        <Box className={classes.scrollableArea}>
          {currentBookings.map((booking) => {
            return <BookingItem booking={booking} nextBooking={false} key={booking.id} />;
          })}
          <Typography className={classes.bookingType}>PAST BOOKINGS:</Typography>
          {pastBookings.map((booking) => {
            return <BookingItem booking={booking} nextBooking={false} key={booking.id} />;
          })}
        </Box>
      </Paper>
    </Box>
  );
};

export default BookingList;
