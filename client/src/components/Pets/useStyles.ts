import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    padding: '50px 0px 10px 0px',
  },
  gridContainer: {
    paddingBottom: '3%',
  },
  petCard: {
    '&:hover': {
      background: '#ededed5c',
    },
    border: '1px solid #cecece',
    borderRadius: 5,
    margin: 10,
    padding: '2%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  petPhotoBox: {
    width: 80,
    height: 80,
    padding: '5%',
  },
  petPhotoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: '2%',
  },
  petPhotoGalleryRow: {},
  petPhotoDetailsBox: {
    width: '100%',
    overflow: 'hidden',
    height: '26vh',
    display: 'flex',
    cursor: 'pointer',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 500,
    minWidth: 300,
  },
  petPhotoGalleryDetailsBox: {
    width: '100%',
    overflow: 'hidden',
    height: '16vh',
    display: 'flex',
    cursor: 'pointer',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    maxWidth: 220,
    minWidth: 180,
  },
  petImgSize: {
    width: '100%',
  },
  petInfoBox: {
    padding: '5% 0px 5% 2%',
    flex: 1,
  },
  petPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  selectedPetName: {
    fontSize: '1.9rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedPetBreed: {
    paddingTop: '5%',
    textAlign: 'center',
  },
  selectedPetSubtitle: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    paddingTop: '8%',
  },
  selectedPetStatusContent: {
    fontSize: '1.2rem',
  },
  selectedPetStatusContentDate: {
    color: 'gray',
  },
  selectedPetinfo: {
    textAlign: 'center',
  },
  petStatusRow: {
    background: '#f9f9f9',
    width: '50%',
    borderRadius: '10px',
    padding: '2%',
  },
  petName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  petBreed: {
    fontSize: '.9rem',
    color: '#c4c4c4',
    paddingBottom: '2%',
  },
  editPet: {
    position: 'absolute',
    top: 25,
    right: 30,
    padding: '2px 8px',
    borderRadius: '5px',
    '&:hover': {
      background: 'gray',
      color: 'white',
      cursor: 'pointer',
    },
  },
  petStatus: {
    color: 'gray',
    fontWeight: 'bold',
  },
  newPetLink: {
    textDecoration: 'none',
  },
  addNewPetBtn: {
    padding: '15px 30px',
    textDecorationLine: 'none',
  },
  btnBox: {
    padding: '5% 0px',
  },
  containerStyle: {
    padding: '20px 50px',
  },
}));

export default useStyles;
