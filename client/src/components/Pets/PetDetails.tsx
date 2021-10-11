import React, { useState } from 'react';
import useStyles from './useStyles';
import { Box, Typography, Button, Grid } from '@material-ui/core';
import PostPetStatus from './PetStatus/PostPetStatus';
const PetDetails = (): JSX.Element => {
  const [showPostForm, setShowPostForm] = useState<boolean>(false);
  const classes = useStyles();
  const pet = {
    name: 'Lucky',
    age: 1.5,
    weight: 30,
    sex: 'male',
    status: [{ id: '23d2', description: 'Lucky status', date: '2 days ago' }],
    breed: 'American Pugabull',
    petPhotoGallery: [
      {
        id: 'd2u3',
        photoURL:
          'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: '1d2u3',
        photoURL:
          'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: '1d42u3',
        photoURL:
          'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
    petPhoto:
      'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  };
  const renderPetGallery = () => {
    return pet.petPhotoGallery.map((g) => {
      return (
        <Grid key={g.id} item xs={4} className={classes.petPhotoRow}>
          <Box className={classes.petPhotoGalleryDetailsBox}>
            <img src={g.photoURL} className={classes.petImgSize} />
          </Box>
        </Grid>
      );
    });
  };
  const renderPetStatus = () => {
    return pet.status.map((s) => {
      return (
        <Grid item key={s.id} xs={12} className={classes.petPhotoRow}>
          <Box className={classes.petStatusRow}>
            <Typography className={classes.selectedPetStatusContent}>{s.description}</Typography>
            <Typography className={classes.selectedPetStatusContentDate}>{s.date}</Typography>
          </Box>
        </Grid>
      );
    });
  };
  return (
    <Box>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} className={classes.petPhotoRow}>
          <Box className={classes.petPhotoDetailsBox}>
            <img src={pet.petPhoto} className={classes.petImgSize} />
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.petPhotoRow}>
          <Box>
            <Typography className={classes.selectedPetName}>{pet.name}</Typography>
            <Typography className={classes.selectedPetBreed}>{pet.breed}</Typography>
            <Typography className={classes.selectedPetinfo}>
              {pet.sex}, {pet.age} years old, {pet.weight} Ib
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.petPhotoRow}>
          <Box>
            <Button variant={'outlined'} color="primary" onClick={() => setShowPostForm(!showPostForm)}>
              Post Status
            </Button>
          </Box>
        </Grid>
        {showPostForm ? (
          <Grid item xs={12} className={classes.petPhotoRow}>
            <PostPetStatus />
          </Grid>
        ) : (
          ''
        )}
      </Grid>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} className={classes.petPhotoRow}>
          <Box>
            <Typography className={classes.selectedPetSubtitle}>{pet.name} Photo Gallery</Typography>
          </Box>
        </Grid>
        {renderPetGallery()}
      </Grid>
      <Grid container className={classes.gridContainer}>
        {renderPetStatus()}
      </Grid>
    </Box>
  );
};

export default PetDetails;
