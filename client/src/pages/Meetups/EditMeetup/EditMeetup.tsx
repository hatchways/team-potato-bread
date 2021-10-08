import {
  Grid,
  Box,
  CircularProgress,
  TextField,
  CssBaseline,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Avatar,
  Button,
  Typography,
  IconButton,
} from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import useStyles from './useStyles';
import { editMyMeetup } from '../../../helpers/APICalls/createOrEditMeetups';
import { Formik, FormikHelpers } from 'formik';
import { useAuth } from '../../../context/useAuthContext';
import { User, Profile, Image } from '../../../interface/User';
import { Meetup, MeetupInfoData } from '../../../interface/Meetup';
import { getMeetupInfo } from '../../../helpers/APICalls/getMeetupInfo';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSnackBar } from '../../../context/useSnackbarContext';
import DashboardSideBanner from '../../../components/DashboardSideBanner/DashboardSideBanner';
import uploadMeetupImage from '../../../helpers/APICalls/uploadMeetupImage';

interface Props {
  meetup: Meetup;
  profile: Profile;
  user: User;
  image: Image;
}

const initMeetup: Meetup = {
  _id: '',
  location: '',
  locationAddress: '',
  locationCityStateZip: '',
  organizer: {
    email: '',
    avatar: '',
    username: '',
  },
  name: '',
  timeStart: '',
  timeEnd: '',
  image: '',
  description: '',
};

const initData: MeetupInfoData = {
  meetup: initMeetup,
  organizer: initMeetup.organizer,
};

interface Values {
  newFile: File | null;
}

type idParams = {
  meetupId: string;
};

export default function EditMeetup(): JSX.Element {
  const classes = useStyles();
  const { meetupId } = useParams<idParams>();
  const [meetupData, setMeetupData] = useState<MeetupInfoData>(initData);
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const { updateSnackBarMessage } = useSnackBar();
  const [eventImage, setEventImage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { loggedInUser } = useAuth();
  const organizerId = meetupData.organizer?._id as string;
  const userId = loggedInUser?._id as string;

  useEffect(() => {
    getMeetupInfo(meetupId as string).then((data) => {
      const newData: MeetupInfoData = data;
      setMeetupData(newData);
      if (newData.meetup?.image) {
        const newImage = newData.meetup?.image as string;
        setEventImage(newImage);
      }
    });
  }, [meetupId, imageUrl]);

  const initFormMeetup = {
    meetupId: meetupId as string,
    organizerId: organizerId as string,
    location: meetupData.meetup?.location as string,
    locationAddress: meetupData.meetup?.locationAddress as string,
    locationCityStateZip: meetupData.meetup?.locationCityStateZip as string,
    name: meetupData.meetup?.name as string,
    date: meetupData.meetup?.date as Date,
    timeStart: meetupData.meetup?.timeStart as string,
    timeEnd: meetupData.meetup?.timeEnd as string,
    description: meetupData.meetup?.description as string,
  };

  const handleUpload = async (file: File) => {
    const newFile = file as File;
    setFile(newFile);
    if (file) {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append('image', file);
      formData.append('meetupId', meetupId);

      try {
        const data = await uploadMeetupImage(formData);
        setImageUrl(data.imageUrl);
        setFile(null);
        setIsSubmitting(false);
        return data.imageUrl;
      } catch (error) {
        setIsSubmitting(false);
        setFile(null);
        throw new Error('Something went wrong.');
      }
    }
  };

  const handleSubmit = (
    {
      meetupId,
      organizerId,
      location,
      locationAddress,
      locationCityStateZip,
      name,
      date,
      timeStart,
      timeEnd,
      description,
    }: {
      meetupId: string;
      organizerId: string;
      location: string;
      locationAddress: string;
      locationCityStateZip: string;
      name: string;
      date: Date;
      timeStart: string;
      timeEnd: string;
      description: string;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      meetupId: string;
      organizerId: string;
      location: string;
      locationAddress: string;
      locationCityStateZip: string;
      name: string;
      date: Date;
      timeStart: string;
      timeEnd: string;
      description: string;
    }>,
  ) => {
    if (organizerId === userId) {
      editMyMeetup(
        meetupId,
        organizerId,
        location,
        locationAddress,
        locationCityStateZip,
        name,
        date,
        timeStart,
        timeEnd,
        description,
      ).then((data) => {
        if (data.error) {
          setSubmitting(false);
          updateSnackBarMessage('Update failed.');
        } else if (data.success) {
          setSubmitting(false);
          updateSnackBarMessage('Successfully updated event!');
        } else {
          setSubmitting(false);
          updateSnackBarMessage('An unexpected error occurred. Please try again');
        }
      });
    } else {
      setSubmitting(false);
      updateSnackBarMessage('You are not authorized to edit this event.');
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.container}>
        <Grid item className={classes.settingSideMenu}>
          <DashboardSideBanner loggedInUser={loggedInUser as User} />
        </Grid>
        <Grid item className={classes.pageContent}>
          <Card className={classes.meetupInfoPageCard}>
            <Formik initialValues={initFormMeetup} onSubmit={handleSubmit} enableReinitialize>
              {({ handleSubmit, handleChange, setFieldValue, values, isSubmitting }) => (
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={eventImage && eventImage}>
                      <input
                        accept="image/*"
                        id="image"
                        type="file"
                        name="image"
                        multiple={false}
                        className={classes.hiddenInput}
                        onChange={(event) => {
                          handleUpload(event.target.files![0]).then((data) => {
                            setFieldValue('image', data);
                            setImageUrl(data as string);
                          });
                        }}
                      />
                      <label htmlFor="image">
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="h6"
                          size="medium"
                          className={classes.uploadIcon}
                        >
                          <PhotoCameraIcon />
                        </IconButton>
                      </label>
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography className={classes.organizerDetails} variant="body1">
                        <Grid item>Organized by: </Grid>
                        <Link
                          to={{ pathname: `/profile/${meetupData.organizer?.profile}` }}
                          className={classes.nameField}
                        >
                          <Typography variant="body1">{meetupData?.organizer?.username}</Typography>
                          <Avatar
                            className={classes.meetupOrganizerAvatar}
                            src={meetupData?.organizer?.avatar}
                          ></Avatar>
                        </Link>
                      </Typography>
                      <Typography align="center" variant="h5">
                        <TextField
                          id="location"
                          label={<Typography className={classes.label}>Event Location</Typography>}
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            classes: { input: classes.inputs },
                            disableUnderline: true,
                          }}
                          name="location"
                          autoFocus
                          value={values.location}
                          onChange={handleChange}
                          placeholder={meetupData.meetup?.location}
                        />
                      </Typography>
                      <Typography>
                        <TextField
                          id="locationAddress"
                          label={<Typography className={classes.label}>Street Address</Typography>}
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            classes: { input: classes.inputs },
                            disableUnderline: true,
                          }}
                          name="locationAddress"
                          value={values.locationAddress}
                          onChange={handleChange}
                          placeholder={meetupData.meetup?.locationAddress}
                        />
                        <TextField
                          id="locationCityStateZip"
                          label={<Typography className={classes.label}>City/State/Zip</Typography>}
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            classes: { input: classes.inputs },
                            disableUnderline: true,
                          }}
                          name="locationCityStateZip"
                          value={values.locationCityStateZip}
                          onChange={handleChange}
                          placeholder={meetupData.meetup?.locationCityStateZip}
                        />
                      </Typography>
                      <Typography className={classes.dateTime} variant="body1" component="h6">
                        <TextField
                          id="date"
                          type="date"
                          label={<Typography className={classes.label}>Event Date</Typography>}
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            classes: { input: classes.inputs },
                            disableUnderline: true,
                          }}
                          name="date"
                          value={values.date}
                          onChange={handleChange}
                        />
                        <TextField
                          id="timeStart"
                          type="time"
                          label={<Typography className={classes.label}>Start Time</Typography>}
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            classes: { input: classes.inputs },
                            disableUnderline: true,
                          }}
                          name="timeStart"
                          value={values.timeStart}
                          onChange={handleChange}
                        />{' '}
                        <TextField
                          id="timeEnd"
                          type="time"
                          label={<Typography className={classes.label}>End Time</Typography>}
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            classes: { input: classes.inputs },
                            disableUnderline: true,
                          }}
                          name="timeEnd"
                          value={values.timeEnd}
                          onChange={handleChange}
                        />
                      </Typography>
                      <Typography variant="h3" align="center" className={classes.meetupInfo}>
                        <TextField
                          id="name"
                          label={<Typography className={classes.label}>Event Name</Typography>}
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            classes: { input: classes.inputs },
                            disableUnderline: true,
                          }}
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          placeholder={meetupData.meetup?.name}
                        />
                      </Typography>
                      <TextField
                        id="description"
                        label={<Typography className={classes.label}>Event Details</Typography>}
                        fullWidth
                        multiline
                        rows={7}
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          classes: { input: classes.inputs },
                          disableUnderline: true,
                        }}
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        placeholder={meetupData.meetup?.description}
                      />

                      <Box textAlign="center">
                        <Button type="submit" variant="contained" color="primary">
                          {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save Changes'}
                        </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </form>
              )}
            </Formik>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
