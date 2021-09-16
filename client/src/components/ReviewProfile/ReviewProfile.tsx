import { Grid, Paper, Box, Avatar, Typography, CircularProgress } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Fragment } from 'react';
import { Profile } from '../../interface/User';
import useStyles from './useStyles';

interface Props {
  profile: Profile | any;
}

export default function ReviewProfile({ profile }: Props): JSX.Element {
  const classes = useStyles();
  // temp as profile.profile is where data is
  const userProfile = profile?.profile;

  return (
    <Grid className={classes.profileWrapper} item component={Paper}>
      <Box className={classes.profileSection}>
        {!!userProfile ? (
          <Fragment>
            <Avatar
              alt={`${userProfile.firstName} ${userProfile.lastName}`}
              src="https://robohash.org/mockLoggedInUser@gmail.com.png"
              className={classes.avatar}
            />
            <Box className={classes.textSection}>
              <Typography className={classes.userName}>{`${userProfile.firstName} ${userProfile.lastName}`}</Typography>
              <Typography className={classes.location}>{userProfile.location}</Typography>
              <Box style={{ marginTop: '.2rem' }} className={classes.rating}>
                <Typography style={{ fontWeight: 500 }}>Average rating: </Typography>
                <Rating style={{ paddingLeft: '4px' }} value={userProfile.avgRating}></Rating>
              </Box>
              <Typography className={classes.about}>{userProfile.description}</Typography>
            </Box>
          </Fragment>
        ) : (
          <CircularProgress style={{ margin: '0 auto' }} />
        )}
      </Box>
    </Grid>
  );
}
