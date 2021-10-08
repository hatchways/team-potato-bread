import useStyles from './useStyles';
import { Meetup } from '../../interface/Meetup';
import { User } from '../../interface/User';
import { Typography, Box, Card, CardContent, Divider, Grid } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from 'react-router-dom';
import Moment from 'moment';

interface Props {
  meetup: Meetup;
  loggedInUser: User;
}

const MeetupCard = ({ meetup, loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();

  const organizer = meetup.organizer._id;
  const userId = loggedInUser._id;

  const date = Moment.utc(meetup.date).format('MM-DD-YYYY');
  const eventStartTime = Moment(meetup.timeStart, 'HH:mm').format('hh:mm A');
  const eventEndTime = Moment(meetup.timeEnd, 'HH:mm').format('hh:mm A');

  return (
    <Card className={classes.root}>
      <Link to={`/meetups/${meetup._id}`} className={classes.link}>
        <CardContent className={classes.contentWrapper}>
          {organizer === userId && (
            <Link to={`/meetup/edit/${meetup._id}`} className={classes.editMeetupLink}>
              Edit Event
            </Link>
          )}
          <Typography className={classes.name} variant="h5" component="h5">
            {meetup.name}
          </Typography>
          <Typography className={classes.description} variant="body2" component="h6">
            {meetup.description}
          </Typography>
          <Divider />
          <Box className={classes.footerWrapper}>
            <Typography className={classes.location} variant="body2" component="h6">
              <RoomIcon color="primary" />
              <Box className={classes.locationBox}>
                <Grid>{meetup.location}</Grid>
                <Grid>{meetup.locationCityStateZip}</Grid>
              </Box>
            </Typography>
            <Typography className={classes.dateTime} variant="body2" component="h6">
              <Grid>{date}</Grid>
              <Grid>{`${eventStartTime} - ${eventEndTime}`}</Grid>
            </Typography>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

export default MeetupCard;
