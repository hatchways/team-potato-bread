import { useState, useEffect } from 'react';
import useStyles from './useStyles';
import { Badge, Typography, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';
import updateNotificationStatus from '../../helpers/APICalls/updateNotificationStatus';
import { useAuth } from '../../context/useAuthContext';
import { getUnreadStatus } from '../../helpers/APICalls/getAllUnreadNotifications';

const theme = createMuiTheme({
  palette: {
    secondary: lightGreen,
  },
});

interface NotificationTypeProps {
  text: string;
}
const NotificationCenter: React.FC<NotificationTypeProps> = ({ text }): JSX.Element => {
  const [newNotifications, hasNewNotification] = useState(false);
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  const read = (event: React.MouseEvent): void => {
    hasNewNotification(false);
    if (loggedInUser) {
      if (text.toLowerCase() === 'messages') {
        updateNotificationStatus(loggedInUser._id, 'message');
      } else {
        updateNotificationStatus(loggedInUser._id, 'booking');
      }
    }
  };

  useEffect(() => {
    const getStatus = async () => {
      let type = '';
      if (text.toLowerCase() === 'messages') {
        type = 'message';
      } else {
        type = 'booking';
      }
      const status = await getUnreadStatus(type);
      hasNewNotification(status);
    };
    getStatus();
  }, [text]);

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
