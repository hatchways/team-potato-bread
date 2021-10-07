import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { User } from '../../interface/User';
import useStyles from './useStyles';

interface Props {
  loggedInUser: User;
}

const DashboardSideBanner = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid className={classes.dashboardSideBanner}>
      <Box className={classes.dashboardSideMenu}>
        <Typography variant="body1">
          <NavLink
            to={{ pathname: `/sitters`, state: { loggedInUser: loggedInUser } }}
            className={classes.navigation}
            activeClassName={classes.activeLink}
          >
            Pet Sitters
          </NavLink>
        </Typography>
        <Typography variant="body1">
          <NavLink
            to={{ pathname: `/meetups`, state: { loggedInUser: loggedInUser } }}
            className={classes.navigation}
            activeClassName={classes.activeLink}
          >
            Pet Meetups
          </NavLink>
        </Typography>
        <Typography variant="body1">Messaging</Typography>
      </Box>
    </Grid>
  );
};

export default DashboardSideBanner;
