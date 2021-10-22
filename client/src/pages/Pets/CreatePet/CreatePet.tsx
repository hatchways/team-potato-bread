import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './useStyles';
import { useLocation } from 'react-router-dom';
import MyProfileSideBanner from '../../../components/MyProfileSideBanner/MyProfileSideBanner';
import { User, Profile } from '../../../interface/User';
import CreatePetForm from '../../../components/Pets/CreatePetForm/CreatePetForm';
const CreatePet = (): JSX.Element => {
  const classes = useStyles();
  type locationState = {
    user: User;
    profile: Profile;
  };
  const location = useLocation();
  const { user, profile } = location.state as locationState;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container component="main" className={classes.root}>
      <Grid container justify="center">
        <Grid item className={classes.settingSideMenu}>
          <MyProfileSideBanner profile={profile as Profile} user={user as User} />
        </Grid>
        <Grid item className={classes.card}>
          <CreatePetForm profile={profile} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreatePet;
