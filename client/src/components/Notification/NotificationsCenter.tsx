import { useState, useEffect } from 'react';
import useStyles from './useStyles';
import { Badge, Typography, ThemeProvider, Popover } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';
import NotificationList from './NotificationList/NotificationList';
import { string } from 'yup/lib/locale';

const theme = createMuiTheme({
  palette: {
    secondary: lightGreen,
  },
});

interface NotificationTypeProps {
  text: string;
}
const NotificationCenter: React.FC<NotificationTypeProps> = ({ text }): JSX.Element => {
  const [newNotifications, hasNewNotification] = useState(true);
  const classes = useStyles();

  const read = (event: React.MouseEvent): void => {
    hasNewNotification(false);
    //send update to backend
  };

  useEffect(() => {
    //get all unread message
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Badge color="secondary" variant="dot" invisible={!newNotifications}>
          <Typography onClick={read} variant="h6" className={classes.text}>
            {text}
          </Typography>
        </Badge>
      </ThemeProvider>
    </>
  );
};

export default NotificationCenter;
