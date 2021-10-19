import React from 'react';
import { Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import MyProfileSideBanner from '../../components/MyProfileSideBanner/MyProfileSideBanner';
import useStyles from './useStyles';
import { User, Profile } from '../../interface/User';
import PetList from '../../components/Pets/PetList';
import PetDetails from '../../components/Pets/PetDetails';
const Pets = (): JSX.Element => {
  const classes = useStyles();
  type locationState = {
    user: User;
    profile: Profile;
  };
  const location = useLocation();
  const { user, profile } = location.state as locationState;

  return (
    <Grid container component="main" className={classes.root}>
      <Grid container>
        <Grid item className={classes.settingSideMenu}>
          <MyProfileSideBanner profile={profile as Profile} user={user as User} />
        </Grid>
        <Grid item className={classes.card}>
          <PetList user={user} profile={profile} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pets;
