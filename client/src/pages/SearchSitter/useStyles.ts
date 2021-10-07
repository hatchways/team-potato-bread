import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../themes/theme';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    minWidth: '100%',
    justifyContent: 'center',
  },
  authWrapper: {
    minHeight: '130px',
    minWidth: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
  },
  settingSideMenu: {
    maxWidth: '25%',
    justifySelf: 'flex-start',
    margin: '3% 0px 0px 3%',
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
  userList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    maxWidth: '100vw',
  },
  welcome: {
    fontSize: 30,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
    textAlign: 'center',
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
}));

export default useStyles;
