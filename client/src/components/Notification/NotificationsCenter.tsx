import { useState, useEffect } from 'react';
import useStyles from './useStyles';
import { Badge, Typography, ThemeProvider, Popover } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';
import NotificationList from './NotificationList/NotificationList';

const theme = createMuiTheme({
  palette: {
    secondary: lightGreen,
  },
});

const NotificationCenter = (): JSX.Element => {
  const [newNotifications, hasNewNotification] = useState(true);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const classes = useStyles();

  const open = Boolean(anchorEl);

  const read = (event: React.MouseEvent): void => {
    hasNewNotification(false);
    setAnchorEl(event.currentTarget);
    //send update to backend
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    //get all unread message
  }, []);

  return (
    <div className={classes.main}>
      <ThemeProvider theme={theme}>
        <Badge color="secondary" variant="dot" invisible={!newNotifications}>
          <Typography onClick={read} className={classes.text}>
            Notifications
          </Typography>
        </Badge>
      </ThemeProvider>
      <Popover
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <NotificationList />
      </Popover>
    </div>
  );
};

export default NotificationCenter;
