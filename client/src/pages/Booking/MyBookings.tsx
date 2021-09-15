import Grid from '@material-ui/core/Grid';
import NavBar from '../../components/NavBar/NavBar';
import BookingCalendar from '../../components/BookingCalendar/BookingCalendar';
import BookingList from '../../components/BookingList/BookingList';
import useStyles from './useStyles';
import { useState, useEffect } from 'react';
import getRequests from '../../helpers/APICalls/getRequests';
import { useAuth } from '../../context/useAuthContext';
import CircularProgress from '@material-ui/core/CircularProgress';

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

  useEffect(() => {
    async function getAndSetBookings() {
      try {
        const { requests } = await getRequests();
        const arrDates: string[] = [];
        requests.map((res: { start: string | number | Date }) => {
          const date = new Date(res.start).toUTCString().slice(5, 16).trim().toUpperCase();
          arrDates.push(date);
        });
        setBookings(requests);
        setDates(arrDates);
      } catch (e) {
        console.log(e);
      }
    }
    getAndSetBookings();
  }, [statusChange]);

  return (
    <Grid container>
      <NavBar />
      <Grid container className={classes.myBooking} spacing={2}>
        {bookings === undefined || dates === undefined ? (
          <CircularProgress />
        ) : (
          <>
            <BookingList bookings={bookings} statusChange={statusChange} updateStatusChange={updateStatusChange} />
            <BookingCalendar dates={dates} />
          </>
        )}
      </Grid>
    </Grid>
  );
};
export default MyBookings;
