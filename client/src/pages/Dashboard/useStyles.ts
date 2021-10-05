import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;
