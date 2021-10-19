import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { User, Profile } from '../../interface/User';
import useStyles from './useStyles';

interface Props {
  user: User;
  profile: Profile;
}

const MyProfileSideBanner = ({ user, profile }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid className={classes.myProfileSideBanner}>
      <Box className={classes.myProfileSideMenu}>
        <Typography variant="body1">Edit Profile</Typography>
        <Typography variant="body1">
          <NavLink
            to={{ pathname: `/myprofile/edit/photo`, state: { user: user, profile: profile } }}
            className={classes.navigation}
            activeClassName={classes.activeLink}
          >
            Profile Photo
          </NavLink>
        </Typography>
        <Typography variant="body1">Availability</Typography>
        <Typography variant="body1">
          <NavLink
            to={{ pathname: `/payment`, state: { user: user, profile: profile } }}
            className={classes.navigation}
            activeClassName={classes.activeLink}
          >
            Payment
          </NavLink>
        </Typography>
        <Typography variant="body1">
          <NavLink
            to={{ pathname: `/pets`, state: { user: user, profile: profile } }}
            className={classes.navigation}
            activeClassName={classes.activeLink}
          >
            Pets
          </NavLink>
        </Typography>
        <Typography variant="body1">Security</Typography>
        <Typography variant="body1">Settings</Typography>
      </Box>
    </Grid>
  );
};

export default MyProfileSideBanner;
