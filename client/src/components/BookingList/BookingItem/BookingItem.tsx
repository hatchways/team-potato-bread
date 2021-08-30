import { Box, Typography, IconButton } from '@material-ui/core';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './useStyles';
import SettingsIcon from '@material-ui/icons/Settings';

interface Props {
  booking: {
    id: string;
    date: string;
    time: string;
    username: string;
    url: string;
    accepted: boolean;
    declined: boolean;
  };
  nextBooking: boolean;
}

const BookingItem: React.FC<Props> = ({ booking, nextBooking }): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={nextBooking ? classes.nextBookingItem : classes.bookingItem}>
      <Box className={classes.bookingInfoRow1}>
        <Typography>{`${booking.date}, ${booking.time}`}</Typography>
        <IconButton>
          <SettingsIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box className={classes.bookingInfoRow2}>
        <Avatar alt="Profile Image" src={booking.url} />
        <Typography className={classes.bookingName}>{booking.username}</Typography>
        {!nextBooking && (
          <Typography color="textSecondary" variant="body2" className={classes.acceptedStatus}>
            ACCEPTED
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default BookingItem;
