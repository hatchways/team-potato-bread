import React from 'react';
import useStyles from './useStyles';
import { Box, Card, Typography, Button, Container, Grid } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { User, Profile } from '../../interface/User';
import PetDetails from './PetDetails';
interface Props {
  user: User;
  profile: Profile;
}
const PetList = ({ user, profile }: Props): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const pets = [
    {
      name: 'Lucky',
      age: 1.5,
      weight: 30,
      sex: 'male',
      status: 'Lucky status',
      breed: 'American Pugabull',
      petPhoto:
        'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      name: 'Bella',
      age: 2,
      weight: 22,
      sex: 'male',
      status: 'Bella status',
      breed: 'American Foxhound',
      petPhoto:
        'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
  ];
  const handlePetDetails = () => {
    console.log('pet details');
  };
  const handleEditPet = () => {
    history.push('/editPet', history.location.state);
  };
  const renderPets = () => {
    return pets.map((p) => {
      return (
        <Grid key={p.name} item xs={6}>
          <Box className={classes.petCard}>
            <Box className={classes.petPhotoBox}>
              <img className={classes.petPhoto} src={p.petPhoto} onClick={handlePetDetails} />
            </Box>
            <Box className={classes.editPet} onClick={handleEditPet}>
              <Typography variant="body1">Edit</Typography>
            </Box>
            <Box className={classes.petInfoBox}>
              <Typography variant="body1" className={classes.petName}>
                {p.name}
              </Typography>
              <Typography variant="body1" className={classes.petBreed}>
                {p.breed}
              </Typography>
              <Typography component="span" className={classes.petStatus}>
                {p.status}
              </Typography>
            </Box>
          </Box>
        </Grid>
      );
    });
  };
  return (
    <Container>
      <Card>
        <Box className={classes.containerStyle}>
          <Typography variant="h2" align="center" className={classes.title}>
            Pets
          </Typography>
          <Typography variant="subtitle1" paragraph={true} align="center">
            Let&apos;s add your pets
          </Typography>
          <Grid container>{renderPets()}</Grid>

          <Box className={classes.btnBox}>
            <NavLink
              to={{ pathname: `/createPet`, state: { user: user, profile: profile } }}
              className={classes.newPetLink}
            >
              <Button variant="outlined" color="primary" className={classes.addNewPetBtn}>
                Add Pet
              </Button>
            </NavLink>
          </Box>
        </Box>
        <PetDetails />
      </Card>
    </Container>
  );
};

export default PetList;
