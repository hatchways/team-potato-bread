import { Box, Typography, IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './useStyles';
import SettingsIcon from '@material-ui/icons/Settings';
import { Bookings } from '../../../pages/Booking/MyBookings';

interface BookingsProps {
  bookInfo: Bookings;
  nextBooking: boolean;
}

const BookingItem: React.FC<BookingsProps> = ({ bookInfo, nextBooking }): JSX.Element => {
  const classes = useStyles();
  const start = new Date(bookInfo.start);
  const end = new Date(bookInfo.end);
  const date = start.toUTCString().slice(5, 16);
  const time = `${start.getHours()}:${getMinutesFormat(start.getMinutes())} - ${end.getHours()}:${getMinutesFormat(
    end.getMinutes(),
  )} ${end.toLocaleString().slice(-2)}`;

  function getMinutesFormat(min: number): string {
    if (min == 0) {
      return '00';
    } else if (min < 10) {
      return `0${min}`;
    } else {
      return `${min}`;
    }
  }

  return (
    <Box className={nextBooking ? classes.nextBookingItem : classes.bookingItem}>
      <Box className={classes.bookingInfoRow1}>
        <Typography>{`${date}, ${time}`}</Typography>
        <IconButton>
          <SettingsIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box className={classes.bookingInfoRow2}>
        <Avatar alt="Profile Image" src={bookInfo.userId.avatar} />
        <Typography className={classes.bookingName}>{bookInfo.userId.username}</Typography>
        <Typography color="textSecondary" variant="body2" className={classes.acceptedStatus}>
          {bookInfo.declined && `DECLINED`}
          {bookInfo.accepted && `ACCEPTED`}
        </Typography>
      </Box>
    </Box>
  );
};

export default BookingItem;
