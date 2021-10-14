import { useEffect, useState } from 'react';
import { CssBaseline, Grid, Typography, Button } from '@material-ui/core';
import useStyles from './useStyles';
import { User } from '../../../interface/User';
import MeetupCard from '../../../components/MeetupCard/MeetupCard';
import { Meetup } from '../../../interface/Meetup';
import { useAuth } from '../../../context/useAuthContext';
import { getMyMeetups } from '../../../helpers/APICalls/getMeetupInfo';
import DashboardSideBanner from '../../../components/DashboardSideBanner/DashboardSideBanner';

export default function MyMeetupsList(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const userId: string = loggedInUser?._id as string;
  const [myMeetups, setMyMeetups] = useState<Meetup[]>([]);

  const getUserMeetups = async (userId: string) => {
    const newMeetups = await getMyMeetups(userId);
    setMyMeetups(newMeetups);
  };

  useEffect(() => {
    getUserMeetups(userId);
  }, [userId]);

  const meetups = myMeetups.map((event) => (
    <MeetupCard loggedInUser={loggedInUser as User} meetup={event} key={event._id} />
  ));

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.container}>
        <Grid item className={classes.settingSideMenu}>
          <DashboardSideBanner loggedInUser={loggedInUser as User} />
        </Grid>
        <Grid item className={classes.pageContent}>
          <Typography className={classes.heading} component="h2" variant="h4">
            My Pet Meetup Events
          </Typography>
          {myMeetups.length !== 0 ? (
            <Grid item className={classes.meetupsList}>
              {meetups}
            </Grid>
          ) : (
            <Typography variant="h3" align="center">
              No Pet Meetups Found
            </Typography>
          )}
          <Button variant="outlined" color="primary" className={classes.outlineBtn}>
            Show More
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
