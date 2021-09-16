import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  mainBox: {
    display: 'flex',
    padding: '7px 15px',
    '&:hover': {
      background: '#fafafa',
    },
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    alignItems: 'flex-start',
  },
  ownerAvatar: {
    width: '50px',
    height: '50px',
    alignSelf: 'center',
  },
  description: {
    color: 'black',
    fontWeight: 700,
  },
  profileType: {
    color: 'grey',
    fontWeight: 700,
  },
  date: {
    color: 'black',
    fontWeight: 700,
    marginTop: '5px',
  },
  route: { textDecoration: 'none' },
}));

export default useStyles;
