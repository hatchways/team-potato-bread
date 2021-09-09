/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paper, Typography } from '@material-ui/core';
import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import useStyles from './useStyles';
import BookingItem from './BookingItem/BookingItem';
import { Bookings } from '../../pages/Booking/MyBookings';
interface BookingsProps {
  bookings: Bookings[];
  updateStatusChange: Dispatch<SetStateAction<boolean>>;
  statusChange: boolean;
}
const BookingList: React.FC<BookingsProps> = ({ bookings, statusChange, updateStatusChange }): JSX.Element => {
  const classes = useStyles();
  const [currentBookings, setCurrentBookings] = useState<Bookings[]>([]);
  const [nextBooking, setNextBooking] = useState<Bookings>();
  const [pastBookings, setPastBookings] = useState<Bookings[]>([]);

  const today = new Date();

  useEffect(() => {
    let hasNextBooking = false;
    const pastArr: Bookings[] = [];
    const currArr: Bookings[] = [];
    bookings.forEach((booking) => {
      if (new Date(booking.start) < today) {
        pastArr.push(booking);
      } else {
        if (booking.accepted && !hasNextBooking) {
          setNextBooking(booking);
          hasNextBooking = true;
        } else {
          currArr.push(booking);
        }
      }
    });
    setPastBookings(pastArr);
    setCurrentBookings(currArr);
  }, [bookings]);

  return (
    <Box>
      <Paper elevation={3} className={classes.nextBooking}>
        <Typography className={classes.nextBookingType}>YOUR NEXT BOOKING:</Typography>
        {nextBooking !== undefined && (
          <BookingItem
            bookInfo={nextBooking}
            nextBooking={true}
            mngDisable={true}
            statusChange={statusChange}
            updateStatusChange={updateStatusChange}
            key={nextBooking._id}
          />
        )}
      </Paper>
      <Paper elevation={3} className={classes.bookingList}>
        <Typography className={classes.bookingType}>CURRENT BOOKINGS:</Typography>
        <Box className={classes.scrollableArea}>
          {currentBookings.map((booking) => {
            return (
              <BookingItem
                bookInfo={booking}
                nextBooking={false}
                mngDisable={false}
                statusChange={statusChange}
                updateStatusChange={updateStatusChange}
                key={booking._id}
              />
            );
          })}
          <Typography className={classes.bookingType}>PAST BOOKINGS:</Typography>
          {pastBookings.map((booking) => {
            return (
              <BookingItem
                bookInfo={booking}
                nextBooking={false}
                mngDisable={true}
                statusChange={statusChange}
                updateStatusChange={updateStatusChange}
                key={booking._id}
              />
            );
          })}
        </Box>
      </Paper>
    </Box>
  );
};

export default BookingList;
