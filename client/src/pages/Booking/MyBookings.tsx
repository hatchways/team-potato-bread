import Grid from '@material-ui/core/Grid';
import MgnBookingHeader from '../../components/MgnBookingHeader/MgnBookingHeader';
import BookingCalendar from '../../components/BookingCalendar/BookingCalendar';
import BookingList from '../../components/BookingList/BookingList';
import useStyles from './useStyles';
import { useState, useEffect } from 'react';
import getRequests from '../../helpers/APICalls/getRequests';
import { useAuth } from '../../context/useAuthContext';

export interface Bookings {
  _id: string;
  userId: {
    avatar: string;
    images: never[];
    _id: string;
    username: string;
    email: string;
    password: string;
    register_date: string;
    __v: number;
  };
  sitterId: {
    avatar: string;
    images: never[];
    _id: string;
    username: string;
    email: string;
    password: string;
    register_date: string;
    __v: number;
  };
  timeZone: string;
  start: Date;
  end: Date;
  accepted: boolean;
  declined: boolean;
  paid: boolean;
  requestDate: string;
}

const MyBookings = (): JSX.Element => {
  const classes = useStyles();
  const [bookings, setBookings] = useState<Bookings[]>();
  const [dates, setDates] = useState<string[]>();
  const [statusChange, updateStatusChange] = useState(false);
  const { loggedInUser } = useAuth();

  useEffect(() => {
    async function getAndSetBookings() {
      if (loggedInUser) {
        const { requests } = await getRequests(loggedInUser['id']);
        const arrDates: string[] = [];
        requests.map((res: { start: string | number | Date }) => {
          const date = new Date(res.start).toUTCString().slice(5, 16).trim().toUpperCase();
          arrDates.push(date);
        });
        setBookings(requests);
        setDates(arrDates);
      }
    }
    getAndSetBookings();
  }, [statusChange, loggedInUser]);

  return (
    <Grid container>
      <MgnBookingHeader />
      <Grid container className={classes.myBooking} spacing={2}>
        {bookings && (
          <BookingList bookings={bookings} statusChange={statusChange} updateStatusChange={updateStatusChange} />
        )}
        {dates && <BookingCalendar dates={dates} />}
      </Grid>
    </Grid>
  );
};
export default MyBookings;
