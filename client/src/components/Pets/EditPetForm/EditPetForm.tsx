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
  RadioGroup,
} from '@material-ui/core';
import PetStatus from '../PetStatus/PetStatus';
import PostPetStatus from '../PetStatus/PostPetStatus';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
const EditPetForm = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const pet = {
    name: 'Lucky',
    age: 1.5,
    weight: 30,
    sex: 'male',
    status: 'pet status',
    breed: 'American Pugabull',
    description: 'my good pet',
    feedingSchedule: 'morning',
    spayedOrNeutered: false,
    petPhoto:
      'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  };
  const [petURL, setPetURL] = useState<string | ''>();
  const [petGalleries, setPetGalleries] = useState<File[]>([]);
  const petPhotoInput = useRef<any>();
  const petPhotoGalleryInput = useRef<any>();

  useEffect(() => {
    setPetURL(pet.petPhoto);
  }, [pet.petPhoto]);

  const handleSubmit = () => {
    history.push('/pets', history.location.state);
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
              name: pet.name,
              breed: pet.breed,
              weight: pet.weight,
              sex: pet.sex,
              age: pet.age,
              spayedOrNeutered: pet.spayedOrNeutered,
              feedingSchedule: pet.feedingSchedule,
              description: pet.description,
              petPhoto: pet.petPhoto,
            }}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, handleChange, setFieldValue, values, isSubmitting }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Grid container className={classes.petPhotoRow}>
                  <Box className={classes.addNewPetPhoto} onClick={handlePetPhotoUpload}>
                    {petURL ? (
                      <img src={petURL} className={classes.petImgSize} />
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
                        setPetURL(URL.createObjectURL(event.target.files[0]));
                        setFieldValue('petPhoto', event.target.files[0]);
                      }
                    }}
                    placeholder="Your Email"
                  />
                </Grid>
                <PetStatus />
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
                  {!!petGalleries &&
                    petGalleries.map((p) => {
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
                        setPetGalleries([...petGalleries, event.target.files[0]]);
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
