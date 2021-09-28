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
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    textAlign: 'center',
    minWidth: '55%',
    maxWidth: '75%',
    margin: '0 auto 10px auto',
    [theme.breakpoints.down('md')]: {
      width: '400px',
    },
  },
  heading: {
    fontWeight: 700,
    marginTop: '3rem',
  },
  sectionGrid: {
    width: '70vw',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  sectionImg: {
    margin: 15,
    maxWidth: 300,
    maxHeight: 300,
    boxShadow: '2px 5px 15px black',
    borderRadius: '5px',
  },
  sectionType: {
    fontWeight: 'bold',
    margin: 15,
    alignSelf: 'center',
    justifySelf: 'center',
    maxWidth: 250,
  },
}));

export default useStyles;
