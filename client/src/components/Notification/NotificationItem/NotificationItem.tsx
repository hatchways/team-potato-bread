import { useState } from 'react';
import useStyles from './useStyles';
import { Box, Avatar, Badge, Typography, ThemeProvider, Paper, createMuiTheme } from '@material-ui/core';

const NotificationItem = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.mainBox}>
      <Avatar
        className={classes.ownerAvatar}
        variant="square"
        sizes="large"
        alt="ownername"
        src="/static/images/avatar/1.jpg"
      />
      <Box className={classes.infoBox}>
        <Typography className={classes.description}>Marry has requested your service for 2 hurs</Typography>
        <Typography variant="caption">Dog Sitting</Typography>
        <Typography className={classes.date}>{new Date().toLocaleDateString()}</Typography>
      </Box>
    </Box>
  );
};

export default NotificationItem;
