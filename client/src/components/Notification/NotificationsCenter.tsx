import { useState } from 'react';
import useStyles from './useStyles';
import { Box, Badge, Typography, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    secondary: lightGreen,
  },
});

const NotificationCenter = (): JSX.Element => {
  const [newNotifications, hasNewNotification] = useState(true);
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <ThemeProvider theme={theme}>
        <Badge color="secondary" variant="dot" invisible={!newNotifications}>
          <Typography className={classes.text}>Notifications</Typography>
        </Badge>
      </ThemeProvider>
    </div>
  );
};

export default NotificationCenter;
