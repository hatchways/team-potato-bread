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
    margin: '3%  auto 0px 0px ',
    [theme.breakpoints.down('md')]: {
      width: '400px',
    },
  },
  pageTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    margin: 20,
  },
  avatarImage: {
    width: 150,
    height: 150,
    margin: '25px auto',
  },
  subtext: {
    width: 175,
    color: 'gray',
    margin: 'auto',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
  },
  uploadButton: {
    margin: '20px auto',
    width: 220,
    height: 50,
    fontWeight: 'bold',
  },
  input: {
    display: 'none',
  },
  delete: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: 10,
  },
  deleteText: {
    paddingLeft: 10,
    color: 'gray',
  },
}));

export default useStyles;
