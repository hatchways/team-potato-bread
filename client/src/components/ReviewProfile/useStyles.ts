import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  profileSection: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    padding: '.5rem',
  },
  profileWrapper: {
    marginTop: '1rem',
  },
  avatar: {
    flexGrow: 1,
    maxWidth: '10rem',
    minWidth: '10rem',
    maxHeight: '10rem',
    minHeight: '10rem',
    marginRight: '15px',
  },
  userName: {
    fontWeight: 700,
  },
  location: {
    opacity: '.8',
  },
  about: {
    marginTop: '.5rem',
  },
  textSection: {
    alignSelf: 'center',
  },
  rating: {
    display: 'flex',
    flexFlow: 'row',
  },
}));

export default useStyles;
