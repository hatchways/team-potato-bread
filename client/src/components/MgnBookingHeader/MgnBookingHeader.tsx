import useStyles from './useStyles';
import { Box, Paper, Typography } from '@material-ui/core';
import logo from '../../Images/logo.png';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { mockLoggedInUser } from '../../mocks/mockUser';

const MgnBookingHeader = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.mgnBookingHeader}>
      <Box className={classes.brand}>
        <img src={logo} />
      </Box>
      <Box className={classes.authWrapper}>
        <Typography className={classes.accAside}>My Sitters</Typography>
        <Typography className={classes.accAside}>Message</Typography>
        <Box>
          <AvatarDisplay user={mockLoggedInUser} loggedIn={true} />
        </Box>
      </Box>
    </Paper>
  );
};

export default MgnBookingHeader;
