import { useState } from 'react';
import useStyles from './useStyles';
import { Box, Avatar, Badge, Typography, ThemeProvider, Paper, createMuiTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
const NotificationItem = (): JSX.Element => {
  const classes = useStyles();
  const [reRoute, setReRoute] = useState<string>('');

  const handleClick = () => {
    //if booking type link booking > rerout to booking page
    setReRoute('mybookings');
  };

  return (
    <Box className={classes.mainBox} onClick={handleClick}>
      <Avatar
        className={classes.ownerAvatar}
        variant="square"
        sizes="large"
        alt="ownername"
        src="/static/images/avatar/1.jpg"
      />
      <Link to={`/${reRoute}`}>
        <Box className={classes.infoBox}>
          <Typography className={classes.description}>Marry has requested your service for 2 hurs</Typography>
          <Typography variant="caption">Dog Sitting</Typography>
          <Typography className={classes.date}>{new Date().toLocaleDateString()}</Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default NotificationItem;
