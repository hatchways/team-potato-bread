import { useState, useEffect } from 'react';
import useStyles from './useStyles';
import { Box, Avatar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Notification } from '../NotificationList/NotificationList';
interface bookingNotificationProps {
  bookingNotification: Notification;
  type: string;
}
const NotificationItem: React.FC<bookingNotificationProps> = ({ bookingNotification, type }): JSX.Element => {
  const classes = useStyles();
  const [reRoute, setReRoute] = useState<string>('');

  const notificationCenterItem = (
    <>
      <Typography className={classes.description}>{bookingNotification.description}</Typography>
      <Typography className={classes.profileType}>Dog Sitting</Typography>
    </>
  );

  const notificationMessageItem = (
    <>
      <Typography className={classes.description}>
        {`You received a new message from ${bookingNotification.owner.username}`}
      </Typography>
      <Typography className={classes.profileType}>{bookingNotification.description}</Typography>
    </>
  );

  useEffect(() => {
    if (bookingNotification.type === 'booking') {
      setReRoute('mybookings');
    } else {
      setReRoute('dashboard');
    }
  }, [bookingNotification]);

  return (
    <Box className={classes.mainBox}>
      <Avatar
        className={classes.ownerAvatar}
        variant="square"
        sizes="large"
        alt="ownername"
        src={bookingNotification.recipient.avatar}
      />
      <Link to={`/${reRoute}`} className={classes.route}>
        <Box className={classes.infoBox}>
          {type === 'message' ? notificationMessageItem : notificationCenterItem}
          <Typography className={classes.date}>
            {new Date(bookingNotification.createdAt).toLocaleDateString()}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default NotificationItem;
