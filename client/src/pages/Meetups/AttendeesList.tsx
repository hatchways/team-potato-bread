import { User } from '../../interface/User';
import { Grid, Avatar } from '@material-ui/core';
import useStyles from './useStyles';
import { mockMeetup } from '../../mocks/mockUser';

interface Props {
  attendees: User[];
}
const AttendeesList = ({ attendees }: Props): JSX.Element => {
  const classes = useStyles();

  const attendeeList = mockMeetup.attendees?.map((attendee) => (
    <Avatar className={classes.listAvatar} src={attendee.avatar} key={attendee._id} />
  ));

  return (
    <Grid container className={classes.attendeesList}>
      {attendeeList}
    </Grid>
  );
};

export default AttendeesList;
