import {
  Grid,
  CssBaseline,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Avatar,
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from '../../../components/MeetupAttendeesList/useStyles';
import { useAuth } from '../../../context/useAuthContext';
import { User, Profile, Image } from '../../../interface/User';
import { Meetup, MeetupInfoData } from '../../../interface/Meetup';
import { getMeetupInfo } from '../../../helpers/APICalls/getMeetupInfo';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSnackBar } from '../../../context/useSnackbarContext';
import DashboardSideBanner from '../../../components/DashboardSideBanner/DashboardSideBanner';
import AttendeesList from '../../../components/MeetupAttendeesList/AttendeesList';
import { meetupRSVP } from '../../../helpers/APICalls/createOrEditMeetups';

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
  attendees: [],
  image: '',
  description: '',
};

const initData: MeetupInfoData = {
  meetup: initMeetup,
  organizer: initMeetup.organizer,
};

type idParams = {
  meetupId: string;
};

export default function MyProfile(): JSX.Element {
  const classes = useStyles();
  const { meetupId } = useParams<idParams>();
  const [meetupData, setMeetupData] = useState<MeetupInfoData>(initData);
  const [attendees, setAttendees] = useState<User[]>([]);
  const { updateSnackBarMessage } = useSnackBar();
  const [eventImage, setEventImage] = useState<string>('');
  const { loggedInUser } = useAuth();

  useEffect(() => {
    getMeetupInfo(meetupId as string).then((data) => {
      const newData: MeetupInfoData = data;
      setMeetupData(newData);
      setAttendees(newData.meetup?.attendees as User[]);
      if (newData.meetup?.image) {
        const newImage = newData.meetup?.image as string;
        setEventImage(newImage);
      }
    });
  }, [meetupId]);

  const meetupRegister = () => {
    meetupRSVP(loggedInUser?._id as string, meetupId).then((data) => {
      if (data.error) {
        updateSnackBarMessage('You are already registered for this event.');
      } else {
        const newData = data as Meetup;
        setAttendees(newData.attendees as User[]);
        updateSnackBarMessage('Successfully registered for event!');
      }
    });
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
            <CardActionArea>
              <CardMedia className={classes.media} image={eventImage && eventImage} />
              <CardContent className={classes.cardContent}>
                <Typography className={classes.organizerDetails} variant="body1">
                  <Grid item>Organized by: </Grid>
                  <Link to={{ pathname: `/profile/${meetupData.organizer?.profile}` }} className={classes.nameField}>
                    <Typography variant="body1">{meetupData?.organizer?.username}</Typography>
                    <Avatar className={classes.meetupOrganizerAvatar} src={meetupData?.organizer?.avatar}></Avatar>
                  </Link>
                </Typography>
                <Typography align="center" variant="h5">
                  {meetupData.meetup?.location}
                </Typography>
                <Link
                  to={{
                    pathname: `https://www.google.com/maps/place/${meetupData.meetup?.locationAddress} ${meetupData.meetup?.locationCityStateZip}`,
                  }}
                  target="_blank"
                  className={classes.locationField}
                >
                  <Button
                    className={classes.locationDetails}
                    variant="text"
                    startIcon={<LocationOnIcon color="primary" fontSize="small" />}
                  >
                    {
                      <Typography align="center">
                        {`${meetupData.meetup?.locationAddress}
                        ${meetupData.meetup?.locationCityStateZip}`}
                      </Typography>
                    }
                  </Button>
                </Link>
                <Typography variant="h3" align="center" className={classes.meetupInfo}>
                  {meetupData.meetup?.name}
                </Typography>
                <Typography variant="subtitle1" align="center" className={classes.meetupInfo}>
                  {meetupData.meetup?.description}
                </Typography>
                <Box className={classes.attendeesBox}>
                  <Typography variant="subtitle2">Attendees:</Typography>
                  {attendees?.length !== 0 ? (
                    <AttendeesList attendees={attendees as User[]} />
                  ) : (
                    <Typography align="center" variant="body1">
                      {' '}
                      No attendees registered{' '}
                    </Typography>
                  )}
                  <Button variant="contained" color="primary" size="small" onClick={meetupRegister}>
                    RSVP for this event
                  </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
