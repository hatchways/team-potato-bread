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
  mode: string;
}
const NotificationCenter: React.FC<NotificationTypeProps> = ({ text, mode }): JSX.Element => {
  const [newNotifications, hasNewNotification] = useState<boolean | undefined>(false);
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
        <Badge
          color="secondary"
          variant="dot"
          invisible={!newNotifications}
          anchorOrigin={{
            vertical: 'top',
            horizontal: mode === 'mobile' ? 'left' : 'right',
          }}
        >
          <Typography
            onClick={read}
            variant="body2"
            className={mode === 'mobile' ? classes.textMobile : classes.textNormal}
          >
            {text}
          </Typography>
        </Badge>
      </ThemeProvider>
    </>
  );
};

export default NotificationCenter;
