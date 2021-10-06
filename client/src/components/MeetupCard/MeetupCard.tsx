import useStyles from './useStyles';
import { Meetup } from '../../interface/Meetup';
import { Typography, Box, Card, CardContent, CardMedia, Divider, Grid } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from 'react-router-dom';
import Moment from 'moment';

interface Props {
  meetup: Meetup;
}

const MeetupCard = ({ meetup }: Props): JSX.Element => {
  const classes = useStyles();

  const date = Moment(meetup.date).format('MM-DD-YYYY');

  return (
    <Card className={classes.root}>
      <Link to={`/meetups/${meetup._id}`} className={classes.link}>
        <CardContent className={classes.contentWrapper}>
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
              <Grid>{`${meetup.timeStart} - ${meetup.timeEnd}`}</Grid>
            </Typography>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

export default MeetupCard;
