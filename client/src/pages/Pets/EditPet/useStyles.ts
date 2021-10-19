import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  settingSideMenu: {
    margin: '3%  0px 0px auto',
  },
  card: {
    minWidth: '55%',
    minHeight: '75%',
    margin: '3% auto 0px 0px',
    [theme.breakpoints.down('md')]: {
      width: '400px',
    },
  },
  btnBox: {
    display: 'flex',
  },
}));

export default useStyles;
