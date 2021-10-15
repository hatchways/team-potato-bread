import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  settingSideMenu: {
    margin: '3%  0px 0px auto',
  },
  profileCard: {
    minWidth: '55%',
    maxWidth: '700px',
    minHeight: '75%',
    margin: '3% auto 0px 0px',
    [theme.breakpoints.down('md')]: {
      width: '400px',
    },
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
    height: '30vh',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  nameField: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  locationField: {
    color: 'gray',
    padding: 15,
    fontSize: 12,
  },
  aboutMe: {
    margin: '10px 15px',
  },
  imagesBox: {
    height: 100,
    display: 'flex',
    justifyContent: 'center',
  },
  imageList: {
    justifyContent: 'space-evenly',
    padding: 10,
  },
  smallProfileImages: {
    maxHeight: 100,
    maxWidth: 100,
  },
  buttons: {
    margin: 'auto',
    alignSelf: 'center',
  },
}));

export default useStyles;
