import React, { Dispatch, SetStateAction, useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './useStyles';
import SettingsIcon from '@material-ui/icons/Settings';
import { Bookings } from '../../../pages/Booking/MyBookings';
import updateRequest from '../../../helpers/APICalls/updateRequest';

interface BookingsProps {
  bookInfo: Bookings;
  nextBooking: boolean;
  mngDisable: boolean;
  statusChange: boolean;
  updateStatusChange: Dispatch<SetStateAction<boolean>>;
}

const BookingItem: React.FC<BookingsProps> = ({
  bookInfo,
  nextBooking,
  mngDisable,
  statusChange,
  updateStatusChange,
}): JSX.Element => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [accept, setAccept] = useState<boolean>(bookInfo.accepted);
  const [decline, setDecline] = useState<boolean>(bookInfo.declined);

  const getMinutesFormat = (min: number): string => {
    if (min == 0) {
      return '00';
    } else if (min < 10) {
      return `0${min}`;
    } else {
      return `${min}`;
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async (event: React.MouseEvent<HTMLElement>) => {
    const action = event.currentTarget.innerText;
    const newStatus = !statusChange;
    if (action == 'accept') {
      const response = await updateRequest(bookInfo._id, 'accepted');
      if (!response.error) {
        setAccept(true);
        setDecline(false);
        updateStatusChange(newStatus);
      }
    } else if (action == 'decline') {
      const response = await updateRequest(bookInfo._id, 'declined');
      if (!response.error) {
        setAccept(false);
        setDecline(true);
        updateStatusChange(newStatus);
      }
    }
    setAnchorEl(null);
  };

  const start = new Date(bookInfo.start);
  const end = new Date(bookInfo.end);
  const date = start.toUTCString().slice(5, 16);
  const time = `${start.getHours()}:${getMinutesFormat(start.getMinutes())} - ${end.getHours()}:${getMinutesFormat(
    end.getMinutes(),
  )} ${end.toLocaleString().slice(-2)}`;

  return (
    <Box className={nextBooking ? classes.nextBookingItem : classes.bookingItem}>
      <Box className={classes.bookingInfoRow1}>
        <Typography>{`${date}, ${time}`}</Typography>
        <IconButton aria-controls={'confirm-menu'} aria-haspopup="true" disabled={mngDisable} onClick={handleClick}>
          <SettingsIcon fontSize="small" />
        </IconButton>
        <Menu id="confirm-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>accept</MenuItem>
          <MenuItem onClick={handleClose}>decline</MenuItem>
        </Menu>
      </Box>
      <Box className={classes.bookingInfoRow2}>
        <Avatar alt="Profile Image" src={bookInfo.userId.avatar} />
        <Typography className={classes.bookingName}>{bookInfo.userId.username}</Typography>
        <Typography color="textSecondary" variant="body2" className={classes.acceptedStatus}>
          {decline && `DECLINED`}
          {accept && `ACCEPTED`}
        </Typography>
      </Box>
    </Box>
  );
};

export default BookingItem;
