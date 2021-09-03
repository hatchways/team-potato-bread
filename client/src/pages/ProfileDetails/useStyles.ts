import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  cards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
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
    border: '2px solid white',
    width: 100,
    height: 100,
  },
  requestCard: {
    minHeight: '50%',
    minWidth: '30%',
    display: 'flex',
    margin: 25,
    flexDirection: 'column',
    textAlign: 'center',
  },
  media: {
    height: 150,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  nameField: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  subtextField: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 12,
  },
  locationField: {
    textAlign: 'center',
    color: 'gray',
    padding: 15,
    fontSize: 12,
  },
  aboutMeField: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
  descriptionField: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
  },
  imagesBox: {
    height: 100,
  },
  rphField: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
  ratingStars: {
    padding: 15,
  },
  datePicker: {
    display: 'block',
    margin: '15px',
  },
  requestButton: {
    textAlign: 'center',
    margin: 'auto',
    marginBottom: 40,
  },
}));

export default useStyles;
