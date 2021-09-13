import useStyles from './useStyles';
import { Box, Paper, Typography } from '@material-ui/core';
import logo from '../../Images/logo.png';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { mockLoggedInUser } from '../../mocks/mockUser';
import NotificationCenter from '../Notification/NotificationsCenter';

const NavBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.mgnBookingHeader}>
      <Box className={classes.brand}>
        <img src={logo} />
      </Box>
      <Box className={classes.authWrapper}>
        <NotificationCenter />
        <Typography className={classes.accAside}>Messages</Typography>
        <Box>
          <AvatarDisplay user={mockLoggedInUser} loggedIn={true} />
        </Box>
      </Box>
    </Paper>
  );
};

export default NavBar;
