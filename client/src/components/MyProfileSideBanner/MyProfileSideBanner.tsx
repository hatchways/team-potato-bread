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
      <Box>
        <Typography variant="h5">Edit Profile</Typography>
        <Typography variant="h5">
          <NavLink
            to={{ pathname: `/myprofile/edit/photo`, state: { user: user, profile: profile } }}
            className={classes.navigation}
            activeClassName={classes.activeLink}
          >
            Profile Photo
          </NavLink>
        </Typography>
        <Typography variant="h5">Availability</Typography>
        <Typography variant="h5">Payment</Typography>
        <Typography variant="h5">Security</Typography>
        <Typography variant="h5">Settings</Typography>
      </Box>
    </Grid>
  );
};

export default MyProfileSideBanner;
