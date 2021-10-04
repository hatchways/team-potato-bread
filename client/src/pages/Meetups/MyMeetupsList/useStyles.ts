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
  searchForm: {
    margin: '3rem auto 1rem auto',
    width: 400,
    display: 'flex',
    justifyContent: 'space-around',
  },
  resetBtn: {
    padding: 20,
    height: 35,
    alignSelf: 'center',
  },
  meetupsList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '80vw',
  },
  outlineBtn: {
    margin: '10px auto',
    padding: 10,
    width: 170,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    border: '1px solid lightgray',
    marginTop: 49,
    marginBottom: 60,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  avatar: {
    alignSelf: 'center',
    marginTop: -50,
    marginBottom: 10,
    backgroundColor: 'white',
    border: '2px solid white',
    width: 100,
    height: 100,
  },
  media: {
    height: 160,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
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
