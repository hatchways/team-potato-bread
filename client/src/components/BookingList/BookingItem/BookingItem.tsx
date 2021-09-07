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
  return (
    <Box className={nextBooking ? classes.nextBookingItem : classes.bookingItem}>
      <Box className={classes.bookingInfoRow1}>
        <Typography>{`${bookInfo.date}, ${bookInfo.time}`}</Typography>
        <IconButton>
          <SettingsIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box className={classes.bookingInfoRow2}>
        <Avatar alt="Profile Image" src={bookInfo.url} />
        <Typography className={classes.bookingName}>{bookInfo.username}</Typography>
        <Typography color="textSecondary" variant="body2" className={classes.acceptedStatus}>
          {bookInfo.declined && `DECLINED`}
          {bookInfo.accepted && `ACCEPTED`}
        </Typography>
      </Box>
    </Box>
  );
};

export default BookingItem;
