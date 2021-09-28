import useStyles from './useStyles';
import { Meetup } from '../../interface/Meetup';
import { Typography, Box, Card, CardContent, CardMedia, Divider, Grid } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from 'react-router-dom';
import { mockMeetup } from '../../mocks/mockUser';

interface Props {
  meetup: Meetup;
}

const MeetupCard = ({ meetup }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/meetup/${mockMeetup._id}`} className={classes.link}>
        <CardMedia className={classes.media} image={mockMeetup.organizer?.avatar} title="User image" />
        <CardContent className={classes.contentWrapper}>
          <Typography className={classes.name} variant="h5" component="h5">
            {mockMeetup.name}
          </Typography>
          <Typography className={classes.description} variant="body2" component="h6">
            {mockMeetup.description}
          </Typography>
          <Divider />
          <Box className={classes.footerWrapper}>
            <Typography className={classes.location} variant="body2" component="h6">
              <RoomIcon color="primary" />
              <Box className={classes.locationBox}>
                <Grid>{mockMeetup.location}</Grid>
                <Grid>{mockMeetup.locationCityStateZip}</Grid>
              </Box>
            </Typography>
            <Typography className={classes.dateTime} variant="body2" component="h6">
              <Grid>{mockMeetup.date}</Grid>
              <Grid>{`${mockMeetup.timeStart} - ${mockMeetup.timeEnd}`}</Grid>
            </Typography>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

export default MeetupCard;
