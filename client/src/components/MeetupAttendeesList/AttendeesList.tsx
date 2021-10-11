import { User } from '../../interface/User';
import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import useStyles from './useStyles';

interface Props {
  attendees: User[];
}
const AttendeesList = ({ attendees }: Props): JSX.Element => {
  const classes = useStyles();

  const attendeeList = attendees?.map((attendee) => (
    <Avatar src={attendee.avatar} alt={attendee.username} key={attendee._id} />
  ));

  return <AvatarGroup className={classes.attendeesList}>{attendeeList}</AvatarGroup>;
};

export default AttendeesList;
