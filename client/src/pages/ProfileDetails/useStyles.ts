import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  // cards: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   alignContent: 'center',
  // },
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
  requestCard: {
    minHeight: '50%',
    minWidth: '30%',
    display: 'flex',
    paddingBottom: 10,
    margin: 25,
    flexDirection: 'column',
    textAlign: 'center',
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
  ratingStars: {
    padding: 15,
  },
  datePicker: {
    display: 'block',
    margin: '15px',
  },
  requestButton: {
    margin: 'auto',
    marginBottom: 40,
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
