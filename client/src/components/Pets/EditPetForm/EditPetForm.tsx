import React, { useRef, useState, useEffect } from 'react';
import useStyles from './useStyles';
import {
  Box,
  Card,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  Divider,
  FormControlLabel,
  Radio,
  CardMedia,
  RadioGroup,
} from '@material-ui/core';
import PetStatus from '../PetStatus/PetStatus';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { Pet } from '../../../interface/Pet';
import { usePet } from '../../../context/usePetContext';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { updatePet, addPhotoGallery } from '../../../helpers/APICalls/pet';
interface Props {
  currentPet: Pet;
}
const EditPetForm = ({ currentPet }: Props): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const { updateCurrentPet } = usePet();
  const { updateSnackBarMessage } = useSnackBar();
  const [petURL, setPetURL] = useState<string | File | undefined>();
  const [petGallery, setPetGallery] = useState<File[]>([]);
  const petPhotoInput = useRef<any>();
  const petPhotoGalleryInput = useRef<any>();

  useEffect(() => {
    if (currentPet.petPhoto) {
      currentPet.petPhoto instanceof File ? '' : setPetURL(currentPet.petPhoto.imageUrl);
    }
  }, [currentPet]);

  const handleSubmit = async (pet: Pet) => {
    try {
      const updatedData = await updatePet(pet);
      if (updatedData) {
        const updatedData = await updatePet(pet);

        if (petGallery.length) {
          const galleryFormData = new FormData();
          galleryFormData.append('petId', updatedData.success.pet._id);
          for (let i = 0; i < petGallery.length; i++) {
            galleryFormData.append('photoGallery', petGallery[i]);
            const updatedPhotoGallery = await addPhotoGallery(galleryFormData);
            updateCurrentPet(updatedPhotoGallery.success.pet);
          }
        } else {
          updateCurrentPet(updatedData.success.pet);
        }
        updateSnackBarMessage('The pet profile updated successfully!');
        history.push('/pets', history.location.state);
      }
    } catch (e) {
      updateSnackBarMessage('The pet profile update failed!');
    }
  };
  const renderPetGallery = () => {
    if (!currentPet.photoGallery) return;
    return currentPet.photoGallery.map((g: any) => {
      if (g instanceof File) return;
      return (
        <Box key={g._id} className={classes.addNewPetPhotoGallery}>
          <img src={g.imageUrl} className={classes.petImgSize} />
        </Box>
      );
    });
  };
  const handlePetPhotoUpload = () => {
    petPhotoInput.current.click();
  };
  const handlePetPhotoGalleryUpload = () => {
    petPhotoGalleryInput.current.click();
  };
  return (
    <Container>
      <Card>
        <Box className={classes.containerStyle}>
          <Typography variant="h2" align="center" className={classes.title}>
            Edit Pet
          </Typography>
          <Typography variant="subtitle1" paragraph={true} align="center">
            Let&apos;s edit your pet
          </Typography>
          <Formik
            initialValues={{
              _id: currentPet._id,
              name: currentPet.name,
              breed: currentPet.breed,
              weight: currentPet.weight,
              sex: currentPet.sex,
              age: currentPet.age,
              spayedOrNeutered: currentPet.spayedOrNeutered,
              feedingSchedule: currentPet.feedingSchedule,
              description: currentPet.description,
            }}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, handleChange, setFieldValue, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Grid container className={classes.petPhotoRow}>
                  <Box className={classes.addNewPetPhoto} onClick={handlePetPhotoUpload}>
                    {petURL ? (
                      <CardMedia
                        component={'img'}
                        alt={'petImage'}
                        title="petImage"
                        src={petURL instanceof File ? URL.createObjectURL(petURL) : petURL}
                        className={classes.petImgSize}
                      />
                    ) : (
                      <Box className={classes.addIcon}>
                        <AddIcon className={classes.addIconSize} />
                        <Typography>Pet Photo</Typography>
                      </Box>
                    )}
                  </Box>
                  <TextField
                    className={classes.fileInput}
                    id="petPhoto"
                    fullWidth
                    type="file"
                    inputRef={petPhotoInput}
                    name="petPhoto"
                    autoFocus
                    onChange={(event: any) => {
                      if (event.target.files[0]) {
                        setPetURL(event.target.files[0]);
                      }
                    }}
                    placeholder="Your Email"
                  />
                </Grid>
                {currentPet.status ? <PetStatus status={currentPet.status} /> : ''}
                <Divider className={classes.spaceTop} />
                <Grid container justify="center" className={classes.formSpace}>
                  <Typography className={classes.petFormSubtitle}>Pet Details</Typography>
                </Grid>
                <Grid container className={classes.inputBox}>
                  <Grid item xs={12} sm={12} md={4} className={classes.petInputFiledLabelRow}>
                    <Typography className={classes.label}>Pet Name</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <TextField
                      id="name"
                      variant="outlined"
                      margin="normal"
                      className={classes.petInputFiledRow}
                      name="name"
                      autoFocus
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Your Pet Name"
                    />
                  </Grid>
                </Grid>
                <Grid container className={classes.inputBox}>
                  <Grid item xs={12} sm={12} md={4} className={classes.petInputFiledLabelRow}>
                    <Typography className={classes.label}>Pet Breed</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <TextField
                      id="breed"
                      variant="outlined"
                      margin="normal"
                      className={classes.petInputFiledRow}
                      name="breed"
                      value={values.breed}
                      autoFocus
                      onChange={handleChange}
                      placeholder="Pet Breed"
                    />
                  </Grid>
                </Grid>
                <Grid container className={classes.inputBox}>
                  <Grid item xs={12} sm={12} md={4} className={classes.petInputFiledLabelRow}>
                    <Typography className={classes.label}>Pet Age</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <TextField
                      id="age"
                      type="number"
                      variant="outlined"
                      margin="normal"
                      className={classes.petInputFiledRow}
                      name="age"
                      value={values.age}
                      autoFocus
                      onChange={handleChange}
                      placeholder="Pet Age"
                    />
                  </Grid>
                </Grid>
                <Grid container className={classes.inputBox}>
                  <Grid item xs={12} sm={12} md={4} className={classes.petInputFiledLabelRow}>
                    <Typography className={classes.label}>Pet Weight</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <TextField
                      id="weight"
                      type="number"
                      variant="outlined"
                      margin="normal"
                      className={classes.petInputFiledRow}
                      name="weight"
                      value={values.weight}
                      autoFocus
                      onChange={handleChange}
                      placeholder="Pet Weight"
                    />
                  </Grid>
                </Grid>
                <Grid container className={classes.formSpaceB}>
                  <Grid item xs={12} sm={12} md={4} className={classes.petInputFiledLabelRow}>
                    <Typography className={classes.label}>Pet Sex</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <RadioGroup
                      className={classes.sexRadioRow}
                      value={values.sex}
                      aria-label="sex"
                      name="sex"
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio className={classes.radioSize} />}
                        label="Female"
                      />
                      <FormControlLabel value="male" control={<Radio className={classes.radioSize} />} label="Male" />
                    </RadioGroup>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container justify="center" className={classes.formSpace}>
                  <Typography className={classes.petFormSubtitle}>Additional Details</Typography>
                </Grid>
                <Grid container className={classes.inputBox}>
                  <Grid item xs={12} sm={12} md={4} className={classes.petInputFiledLabelRow}>
                    <Typography className={classes.label}>Spayed Or Neutered</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <RadioGroup
                      className={classes.sexRadioRow}
                      aria-label="spayedOrNeutered"
                      name="spayedOrNeutered"
                      value={values.spayedOrNeutered ? 'true' : 'false'}
                      onChange={(e: any) => {
                        setFieldValue('spayedOrNeutered', e.target.value === 'true' ? true : false);
                      }}
                    >
                      <FormControlLabel value={'true'} control={<Radio className={classes.radioSize} />} label="Yes" />
                      <FormControlLabel value={'false'} control={<Radio className={classes.radioSize} />} label="No" />
                    </RadioGroup>
                  </Grid>
                </Grid>
                <Grid container className={classes.inputBox}>
                  <Grid item xs={12} sm={12} md={4} className={classes.petInputFiledLabelRow}>
                    <Typography className={classes.label}>Feeding Schedule</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <TextField
                      id="feedingSchedule"
                      variant="outlined"
                      margin="normal"
                      className={classes.petInputFiledRow}
                      name="feedingSchedule"
                      autoFocus
                      value={values.feedingSchedule}
                      onChange={handleChange}
                      placeholder="eg. Every Morning, twich a day"
                    />
                  </Grid>
                </Grid>
                <Grid container className={classes.formSpaceB}>
                  <Grid item xs={12} sm={12} md={4} className={classes.petInputFiledLabelRow}>
                    <Typography className={classes.label}>About your pet</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <TextField
                      id="description"
                      multiline
                      rows={6}
                      rowsMax={6}
                      className={classes.petInputFiledRow}
                      variant="outlined"
                      margin="normal"
                      name="description"
                      autoComplete="description"
                      autoFocus
                      value={values.description}
                      onChange={handleChange}
                      placeholder="tell us about your pet"
                    />
                  </Grid>
                </Grid>
                <Divider />
                <Grid container justify="center" className={classes.formSpace}>
                  <Typography variant={'h3'}>Your Pet Photo Gallery</Typography>
                </Grid>
                <Grid container className={classes.petPhotoGalleryRow}>
                  {renderPetGallery()}
                  {!!petGallery &&
                    petGallery.map((p) => {
                      return (
                        <Box key={p.name} className={classes.addNewPetPhotoGallery}>
                          <img src={URL.createObjectURL(p)} className={classes.petImgSize} />
                        </Box>
                      );
                    })}
                  <Box className={classes.addNewPetPhotoGallery} onClick={handlePetPhotoGalleryUpload}>
                    <Box className={classes.addIcon}>
                      <AddIcon className={classes.addIconSize} />
                      <Typography>Pet Photo Gallery</Typography>
                    </Box>
                  </Box>
                  <TextField
                    className={classes.fileInput}
                    id="petPhotoGallery"
                    fullWidth
                    type="file"
                    inputRef={petPhotoGalleryInput}
                    name="petPhotoGallery"
                    autoFocus
                    onChange={(event: any) => {
                      if (event.target.files[0]) {
                        setPetGallery([...petGallery, event.target.files[0]]);
                      }
                    }}
                  />
                </Grid>
                <Box className={classes.btnBox}>
                  <Button type="submit" variant="outlined" color="primary" className={classes.addNewPetBtn}>
                    Save Pet
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Card>
    </Container>
  );
};

export default EditPetForm;
