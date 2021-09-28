import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { User } from '../../interface/User';
import { useHistory } from 'react-router-dom';
import DashboardSideBanner from '../../components/DashboardSideBanner/DashboardSideBanner';
import WelcomePage from '../WelcomePage/WelcomePage';

interface Props {
  loggedInUser: User;
}

export default function Dashboard(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.container}>
        <Grid item className={classes.settingSideMenu}>
          <DashboardSideBanner loggedInUser={loggedInUser} />
        </Grid>
        <Grid item className={classes.pageContent}>
          <WelcomePage />
        </Grid>
      </Grid>
    </Grid>
  );
}
