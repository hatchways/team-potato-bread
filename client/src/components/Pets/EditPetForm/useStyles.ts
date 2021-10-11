import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    padding: '50px 0px 10px 0px',
  },
  petCard: {
    '&:hover': {
      cursor: 'pointer',
      background: '#ededed5c',
    },
    border: '1px solid #cecece',
    borderRadius: 5,
    margin: 10,
    padding: '2%',
    display: 'flex',
    alignItems: 'center',
  },
  newPetLink: {
    textDecoration: 'none',
  },
  addNewPetBtn: {
    padding: '15px 30px',
    textDecorationLine: 'none',
  },
  inputBox: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: 'rgb(0,0,0,1)',
    paddingLeft: '5px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  btnBox: {
    padding: '5% 0px',
    textAlign: 'center',
  },
  fileInput: {
    visibility: 'hidden',
  },
  spaceTop: {
    marginTop: '3%',
  },
  petPhotoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: '2%',
  },
  sexRadioRow: {
    flexDirection: 'row',
  },
  radioSize: {
    '& svg': {
      width: '30px',
      height: '30px',
    },
  },
  petPhotoGalleryRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  formSpace: {
    padding: '5%',
  },
  formSpaceB: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '8%',
  },
  petFormSubtitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  addIcon: {
    color: '#e3e3e3',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  petImgSize: {
    width: '100%',
  },
  addIconSize: {
    width: 100,
    height: 100,
  },
  addNewPetPhoto: {
    border: '1px solid #ebebeb',
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
  addNewPetPhotoGallery: {
    border: '1px solid #ebebeb',
    width: '100%',
    overflow: 'hidden',
    height: '16vh',
    display: 'flex',
    cursor: 'pointer',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 280,
    minWidth: 160,
    margin: '1%',
  },
  petInputFiledLabelRow: {
    textAlign: 'right',
    paddingRight: '15%',
  },
  petInputFiledRow: {
    width: '85%',
  },
  containerStyle: {
    padding: '20px 50px',
  },
}));

export default useStyles;
