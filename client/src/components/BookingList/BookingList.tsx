/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paper, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import useStyles from './useStyles';
import BookingItem from './BookingItem/BookingItem';
import { Bookings } from '../../pages/Booking/MyBookings';
interface BookingsProps {
  bookings: Bookings[];
}
const BookingList: React.FC<BookingsProps> = ({ bookings }): JSX.Element => {
  const classes = useStyles();
  const [currentBookings, setCurrentBookings] = useState<Bookings[]>([]);
  const [pastBookings, setPastBookings] = useState<Bookings[]>([]);

  const today = new Date();

  useEffect(() => {
    bookings.forEach((booking) => {
      if (new Date(booking.start) < today) {
        setPastBookings((pastBookings) => [...pastBookings, booking]);
      } else {
        setCurrentBookings((currentBookings) => [...currentBookings, booking]);
      }
    });
  }, []);

  return (
    <Box>
      <Paper elevation={3} className={classes.bookingList}>
        <Typography className={classes.bookingType}>YOUR NEXT BOOKING:</Typography>
        {currentBookings.length > 1 && (
          <BookingItem
            bookInfo={currentBookings[0]}
            nextBooking={true}
            pastBooking={false}
            key={currentBookings[0]._id}
          />
        )}
      </Paper>
      <Paper elevation={3} className={classes.bookingList}>
        <Typography className={classes.bookingType}>CURRENT BOOKINGS:</Typography>
        <Box className={classes.scrollableArea}>
          {currentBookings.slice(1).map((booking) => {
            return <BookingItem bookInfo={booking} nextBooking={false} pastBooking={false} key={booking._id} />;
          })}
          <Typography className={classes.bookingType}>PAST BOOKINGS:</Typography>
          {pastBookings.map((booking) => {
            return <BookingItem bookInfo={booking} nextBooking={false} pastBooking={true} key={booking._id} />;
          })}
        </Box>
      </Paper>
    </Box>
  );
};

export default BookingList;
