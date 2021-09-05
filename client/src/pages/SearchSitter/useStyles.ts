import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../themes/theme';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    minWidth: '100%',
  },
  authWrapper: {
    minHeight: '130px',
    minWidth: '100%',
  },
  heading: {
    fontWeight: 700,
    marginTop: '5rem',
  },
  searchForm: {
    marginTop: '3rem',
    marginBottom: '1rem',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '80vw',
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
    margin: theme.spacing(3, 2, 2),
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
