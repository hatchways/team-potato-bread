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
    minWidth: '85%',
    maxWidth: '100%',
    minHeight: '75%',
    margin: '3% auto 3% auto',
    [theme.breakpoints.down('md')]: {
      width: '400px',
    },
  },
  form: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'center',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: '5px',
    textTransform: 'uppercase',
  },
  hiddenInput: {
    display: 'none',
  },
  inputs: {
    width: '90%',
    marginTop: '.3rem',
    padding: '10px',
    border: '1px solid lightgray',
    margin: 5,
    borderRadius: theme.shape.borderRadius,
  },
  uploadIcon: {
    float: 'right',
  },
  heading: {
    fontWeight: 700,
    marginTop: '5rem',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    color: 'gray',
    fontSize: 12,
  },
  dateTime: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    fontWeight: 700,
    color: 'black',
  },
  meetupInfo: {
    textAlign: 'center',
    margin: '10px auto',
    maxWidth: '80%',
  },
}));

export default useStyles;
