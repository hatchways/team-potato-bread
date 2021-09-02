import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row',
    maxWidth: 345,
    margin: '2rem',
  },
  contentWrapper: {
    textAlign: 'center',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    marginBottom: '0',
    paddingBottom: '0',
  },
  avatar: {
    borderRadius: '50%',
  },
  name: {
    fontWeight: 700,
  },
  subTitle: {
    color: 'gray',
  },
  description: {
    color: 'black',
    fontWeight: 700,
    margin: '0 2rem',
  },
  footerWrapper: {
    marginTop: '1rem',
    marginLeft: '.5rem',
    marginRight: '.5rem',
  },
  location: {
    float: 'left',
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: '50%',
  },
  rate: {
    float: 'right',
    maxWidth: '50%',
    fontWeight: 700,
    fontSize: '16px',
  },
}));

export default useStyles;
