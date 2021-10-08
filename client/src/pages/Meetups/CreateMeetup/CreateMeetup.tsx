import { Grid, Button, Card, TextField, Box, Typography, CircularProgress } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import { useAuth } from '../../../context/useAuthContext';
import { createNewMeetup } from '../../../helpers/APICalls/createOrEditMeetups';
import * as Yup from 'yup';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { User } from '../../../interface/User';
import DashboardSideBanner from '../../../components/DashboardSideBanner/DashboardSideBanner';
import useStyles from './useStyles';

const CreateMeetup = (): JSX.Element => {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const { loggedInUser } = useAuth();

  const handleSubmit = (
    {
      location,
      locationAddress,
      locationCityStateZip,
      organizer,
      name,
      date,
      timeStart,
      timeEnd,
      description,
    }: {
      location: string;
      locationAddress: string;
      locationCityStateZip: string;
      organizer: string;
      name: string;
      date: Date;
      timeStart: string;
      timeEnd: string;
      description: string;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      location: string;
      locationAddress: string;
      locationCityStateZip: string;
      organizer: string;
      name: string;
      date: Date;
      timeStart: string;
      timeEnd: string;
      description: string;
    }>,
  ) => {
    createNewMeetup(
      location,
      locationAddress,
      locationCityStateZip,
      organizer,
      name,
      date,
      timeStart,
      timeEnd,
      description,
    ).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        setSubmitting(false);
        updateSnackBarMessage('Successfully created event!');
      } else {
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  const eventDate: Date = new Date();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item className={classes.settingSideMenu}>
        <DashboardSideBanner loggedInUser={loggedInUser as User} />
      </Grid>
      <Card className={classes.pageContent}>
        <Grid container>
          <Formik
            initialValues={{
              location: '',
              locationAddress: '',
              locationCityStateZip: '',
              organizer: loggedInUser?._id as string,
              name: '',
              date: eventDate,
              timeStart: '00:00',
              timeEnd: '23:59',
              description: '',
            }}
            validationSchema={Yup.object().shape({
              location: Yup.string().required('Location name is required'),
              locationAddress: Yup.string().required('Street address is required'),
              locationCityStateZip: Yup.string().required('City, State, and Zip code are required'),
              organizer: Yup.string().required('Organizer Id is required. Are you logged in?'),
              name: Yup.string().required('Event name is required'),
            })}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
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
                  helperText={touched.name ? errors.name : ''}
                  error={touched.name && Boolean(errors.name)}
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Doggy Day Out"
                />
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
                  helperText={touched.location ? errors.location : ''}
                  error={touched.location && Boolean(errors.location)}
                  value={values.location}
                  onChange={handleChange}
                  placeholder="My City Park"
                />
                <TextField
                  id="locationAddress"
                  label={<Typography className={classes.label}>Street Address</Typography>}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    classes: { input: classes.inputs },
                    disableUnderline: true,
                  }}
                  name="locationAddress"
                  helperText={touched.locationAddress ? errors.locationAddress : ''}
                  error={touched.locationAddress && Boolean(errors.locationAddress)}
                  value={values.locationAddress}
                  onChange={handleChange}
                  placeholder="123 Main St."
                />
                <TextField
                  id="locationCityStateZip"
                  label={<Typography className={classes.label}>City/State/Zip</Typography>}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    classes: { input: classes.inputs },
                    disableUnderline: true,
                  }}
                  name="locationCityStateZip"
                  helperText={touched.locationCityStateZip ? errors.locationCityStateZip : ''}
                  error={touched.locationCityStateZip && Boolean(errors.locationCityStateZip)}
                  value={values.locationCityStateZip}
                  onChange={handleChange}
                  placeholder="Your City, ZZ 12345"
                />
                <TextField
                  id="organizer"
                  label={<Typography className={classes.label}>Event Organizer</Typography>}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    classes: { input: classes.inputs },
                    disableUnderline: true,
                  }}
                  name="organizer"
                  value={values.organizer}
                  disabled
                />
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
                  helperText={touched.date ? errors.date : ''}
                  error={touched.date && Boolean(errors.date)}
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
                />
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
                  helperText={touched.description ? errors.description : ''}
                  error={touched.description && Boolean(errors.description)}
                  value={values.description}
                  onChange={handleChange}
                  placeholder="Describe the details of your event..."
                />

                <Box textAlign="center">
                  <Button type="submit" variant="contained" color="primary" className={classes.submit}>
                    {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Create Event'}
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CreateMeetup;
