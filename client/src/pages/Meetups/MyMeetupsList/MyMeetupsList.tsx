import { useEffect, useState } from 'react';
import { CssBaseline, Grid, Typography, Button } from '@material-ui/core';
import useStyles from './useStyles';
import { User } from '../../../interface/User';
import MeetupCard from '../../../components/MeetupCard/MeetupCard';
import { Meetup } from '../../../interface/Meetup';
import { useAuth } from '../../../context/useAuthContext';
import { getMyMeetups } from '../../../helpers/APICalls/getMeetupInfo';
import DashboardSideBanner from '../../../components/DashboardSideBanner/DashboardSideBanner';

export default function MeetupsList(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const userId = loggedInUser?._id as string;
  const [myMeetups, setMyMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    getMyMeetups(userId).then((data) => {
      setMyMeetups(data);
    });
  }, [userId]);

  const meetups = myMeetups.map((event) => <MeetupCard meetup={event} key={event._id} />);

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
