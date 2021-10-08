import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    minWidth: '100%',
    justifyContent: 'center',
  },
  form: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'center',
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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
    justifyContent: 'center',
    textAlign: 'center',
    minWidth: '55%',
    maxWidth: '75%',
    minHeight: '75%',
    margin: '3% auto 3% auto',
    [theme.breakpoints.down('md')]: {
      width: '400px',
    },
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: '5px',
    textTransform: 'uppercase',
  },
  inputs: {
    marginTop: '.3rem',
    height: '2rem',
    padding: '10px',
    border: '1px solid lightgray',
    borderRadius: theme.shape.borderRadius,
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

export default useStyles;
