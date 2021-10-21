import React, { useState } from 'react';
import useStyles from './useStyles';
import { Box, Typography, Button, Grid, CardMedia } from '@material-ui/core';
import PostPetStatus from './PetStatus/PostPetStatus';
import { Pet } from '../../interface/Pet';
import moment from 'moment';
interface Props {
  currentPet: Pet;
}

const PetDetails = ({ currentPet }: Props): JSX.Element => {
  const [showPostForm, setShowPostForm] = useState<boolean>(false);
  const classes = useStyles();

  const renderPetGallery = () => {
    if (!currentPet.photoGallery) return;
    return currentPet.photoGallery.map((g: any) => {
      if (g instanceof File) return;
      return (
        <Grid key={g._id} item xs={4} className={classes.petPhotoRow}>
          <Box className={classes.petPhotoGalleryDetailsBox}>
            <CardMedia component={'img'} alt={'photoGallery'} src={g.imageUrl} className={classes.petImgSize} />
          </Box>
        </Grid>
      );
    });
  };
  const renderPetStatus = () => {
    if (!currentPet.status) return;
    return currentPet.status.map((s) => {
      return (
        <Grid item key={s._id} xs={12} className={classes.petPhotoRow}>
          <Box className={classes.petStatusRow}>
            <Typography className={classes.selectedPetStatusContent}>{s.description}</Typography>
            <Typography className={classes.selectedPetStatusContentDate}> {moment(s.createdAt).fromNow()}</Typography>
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
            {currentPet.petPhoto instanceof File ? (
              ''
            ) : (
              <CardMedia
                component={'img'}
                alt={'petPhoto'}
                src={currentPet.petPhoto?.imageUrl}
                className={classes.petImgSize}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.petPhotoRow}>
          <Box>
            <Typography className={classes.selectedPetName}>{currentPet.name}</Typography>
            <Typography className={classes.selectedPetBreed}>{currentPet.breed}</Typography>
            <Typography className={classes.selectedPetinfo}>
              {currentPet.sex}, {currentPet.age} years old, {currentPet.weight} Ib
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.petPhotoRow}>
          <Box>
            <Button variant={'outlined'} color="primary" onClick={() => setShowPostForm(!showPostForm)}>
              {showPostForm ? 'Hide Form' : 'Post Status'}
            </Button>
          </Box>
        </Grid>
        {showPostForm ? (
          <Grid item xs={12} className={classes.petPhotoRow}>
            <PostPetStatus petId={currentPet._id} setShowPostForm={() => setShowPostForm(!showPostForm)} />
          </Grid>
        ) : (
          ''
        )}
      </Grid>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} className={classes.petPhotoRow}>
          <Box>
            <Typography className={classes.selectedPetSubtitle}>{currentPet.name} Photo Gallery</Typography>
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
