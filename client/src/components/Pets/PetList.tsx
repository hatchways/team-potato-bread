import React, { useEffect } from 'react';
import useStyles from './useStyles';
import { Box, Card, Typography, Button, Container, Grid, CardMedia, IconButton } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { User, Profile } from '../../interface/User';
import { usePet } from '../../context/usePetContext';
import { Pet } from '../../interface/Pet';
import PetDetails from './PetDetails';
import { PetsApiData } from '../../interface/PetApiData';
import { getPets, deletePet } from '../../helpers/APICalls/pet';
import { useSnackBar } from '../../context/useSnackbarContext';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
interface Props {
  user: User;
  profile: Profile;
}

const PetList = ({ user, profile }: Props): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const { updateSnackBarMessage } = useSnackBar();
  const { updatePetContext, pets, currentPet, updateCurrentPet } = usePet();

  useEffect(() => {
    if (!profile._id) return;
    getPets(profile._id).then((data: PetsApiData) => {
      if (!data) return;
      if (data.success) {
        updatePetContext(data.success.pets);
      }
    });
  }, [updatePetContext, profile]);

  const handleEditPet = (p: Pet) => {
    updateCurrentPet(p);
    history.push('/editPet', history.location.state);
  };
  const handleDeletePet = async (p: Pet) => {
    try {
      if (p._id) {
        await deletePet(p._id);
        if (pets) {
          const result = pets.filter((pet) => pet._id !== p._id);
          updatePetContext(result);
          currentPet?._id === p._id ? updateCurrentPet(undefined) : '';
          updateSnackBarMessage('The Pet profile was deleted successfully!');
        }
      }
    } catch (e) {
      updateSnackBarMessage('Something went wrong!');
    }

    history.push('/pets', history.location.state);
  };
  const renderPets = () => {
    if (!pets || !pets.length) return;
    return pets.map((p) => {
      return (
        <Grid key={p.name} item xs={6}>
          <Box className={classes.petCard}>
            <Box className={classes.petPhotoBox}>
              {!(p.petPhoto instanceof File) && (
                <CardMedia
                  component={'img'}
                  alt={'petPhoto'}
                  className={classes.petPhoto}
                  src={p.petPhoto?.imageUrl}
                  onClick={() => updateCurrentPet(p)}
                />
              )}
            </Box>
            <Box className={classes.editPet}>
              <IconButton>
                <DeleteOutlineIcon
                  onClick={() => {
                    handleDeletePet(p);
                  }}
                />
              </IconButton>
              <IconButton>
                <EditIcon
                  onClick={() => {
                    handleEditPet(p);
                  }}
                />
              </IconButton>
            </Box>
            <Box className={classes.petInfoBox}>
              <Typography variant="body1" className={classes.petName}>
                {p.name}
              </Typography>
              <Typography variant="body1" className={classes.petBreed}>
                {p.breed}
              </Typography>
              <Typography component="span" className={classes.petStatus}>
                {!!p.status && p.status[0]?.description}
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
        {!!currentPet && <PetDetails currentPet={currentPet} />}
      </Card>
    </Container>
  );
};

export default PetList;
