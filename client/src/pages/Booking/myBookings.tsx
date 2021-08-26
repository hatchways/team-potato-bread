import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import MgnBookingHeader from '../../components/MgnBookingHeader/MgnBookingHeader';

import useStyles from './useStyles';

import { useEffect } from 'react';

export default function myBookings(): JSX.Element {
  // const classes = useStyles();

  // const { loggedInUser } = useAuth();
  // const { initSocket } = useSocket();

  // const history = useHistory();

  // useEffect(() => {
  //   initSocket();
  // }, [initSocket]);

  // if (loggedInUser === undefined) return <CircularProgress />;
  // if (!loggedInUser) {
  //   history.push('/login');
  //   // loading for a split seconds until history.push works
  //   return <CircularProgress />;
  // }

  return (
    <Grid container component="main">
      <MgnBookingHeader />
      {/* <CssBaseline />
      <Grid item className={classes.drawerWrapper}>
        <ChatSideBanner loggedInUser={loggedInUser} />
      </Grid> */}
      <p>hello</p>
    </Grid>
  );
}
