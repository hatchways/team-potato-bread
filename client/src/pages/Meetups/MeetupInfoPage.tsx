import {
  Grid,
  CssBaseline,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Avatar,
  IconButton,
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './useStyles';
import ProfileImageList from '../ProfileDetails/ProfileImageList';
import { useAuth } from '../../context/useAuthContext';
import { User, Profile, Image } from '../../interface/User';
import { Meetup } from '../../interface/Meetup';
import { getMeetupInfo } from '../../helpers/APICalls/getMeetupInfo';
import { useEffect, useState } from 'react';
import DashboardSideBanner from '../../components/DashboardSideBanner/DashboardSideBanner';
import { mockMeetup } from '../../mocks/mockUser';
import AttendeesList from './AttendeesList';

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
  date: '',
  timeStart: '',
  timeEnd: '',
  attendees: [],
  image: mockMeetup.image as Image,
  description: '',
};

export default function MyProfile(): JSX.Element {
  const classes = useStyles();
  const [meetupData, setMeetupData] = useState<Meetup>(mockMeetup);
  const [eventImage, setEventImage] = useState<Image>(initMeetup.image as Image);
  const { loggedInUser } = useAuth();

  // TODO: set up once back end is up
  // useEffect(() => {
  //   getMeetupInfo(mockMeetup._id as string).then((data) => {
  //     const newMeetupData = data;
  //     setMeetupData(newMeetupData);
  //     if (data.images !== undefined) {
  //       const profileImages = data.images as Image[];
  //       const newBannerImage = profileImages.shift();
  //       setBannerImage(newBannerImage);
  //       setImages(profileImages);
  //     }
  //   });
  // }, []);

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
              <CardMedia className={classes.media} image={eventImage && eventImage.imageUrl} />
              <CardContent className={classes.cardContent}>
                <Avatar className={classes.avatar} src={meetupData.organizer.avatar} />
                <Typography align="center">
                  Organized by:
                  <Grid className={classes.nameField}>{meetupData.organizer.username}</Grid>
                </Typography>
                <Typography align="center" variant="body1">
                  {meetupData.location}
                </Typography>
                <IconButton className={classes.locationField} disabled>
                  <LocationOnIcon color="primary" fontSize="small" />
                  {meetupData.locationAddress}
                  {meetupData.locationCityStateZip}
                </IconButton>
                <Typography variant="h3" align="center" className={classes.meetupInfo}>
                  {meetupData.name}
                </Typography>
                <Typography variant="subtitle2" align="center" className={classes.meetupInfo}>
                  {meetupData.description}
                </Typography>
                <Box className={classes.attendeesBox}>
                  {mockMeetup.attendees?.length !== 0 ? (
                    <AttendeesList attendees={mockMeetup.attendees as User[]} />
                  ) : (
                    <Typography align="center" variant="body1">
                      {' '}
                      No attendees registered{' '}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
