import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    minWidth: '100%',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
  },
  settingSideMenu: {
    maxWidth: '25%',
    justifySelf: 'flex-start',
    margin: '3%  0px 0px 3%',
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    textAlign: 'center',
    minWidth: '55%',
    maxWidth: '75%',
    minHeight: '75%',
    margin: '3% auto 0px auto',
    [theme.breakpoints.down('md')]: {
      width: '400px',
    },
  },
  meetupInfoPageCard: {
    minWidth: '55%',
    maxWidth: '65%',
    minHeight: '75%',
    margin: '3% auto 3% auto',
    [theme.breakpoints.down('md')]: {
      width: '400px',
    },
  },
  createMeetupLink: {
    alignSelf: 'flex-end',
    margin: '0px 0px -45px 0px',
    padding: 15,
    fontSize: 14,
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  heading: {
    fontWeight: 700,
    marginTop: '5rem',
  },
  media: {
    height: '40vh',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  dateTime: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    fontWeight: 700,
    color: 'black',
  },
  nameField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    '&:hover': {
      color: 'firebrick',
    },
    textDecoration: 'none',
    margin: '5px 5px 10px',
  },
  meetupOrganizerAvatar: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },
  locationField: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  organizerDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: 'gray',
    fontSize: 12,
  },
  locationDetails: {
    margin: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    color: 'gray',
    '&:hover': {
      color: 'firebrick',
    },
    fontSize: 12,
  },
  meetupInfo: {
    textAlign: 'center',
    margin: '10px auto',
    maxWidth: '80%',
  },
  attendeesBox: {
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  attendeesList: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 10,
  },
}));

export default useStyles;
