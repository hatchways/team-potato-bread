import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  profileCard: {
    minWidth: '55%',
    minHeight: '75%',
    margin: 25,
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
    height: 160,
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
  imagesBox: {
    height: 100,
  },
  imageList: {
    justifyContent: 'space-evenly',
    padding: 10,
  },
  smallProfileImages: {
    maxHeight: 100,
    maxWidth: 100,
  },
}));

export default useStyles;