import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    maxWidth: 250,
    margin: '2rem',
    flex: '1 1 300px',
  },
  link: {
    textDecoration: 'none',
  },
  contentWrapper: {
    textAlign: 'center',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    marginBottom: '0',
    paddingBottom: '0',
  },
  media: {
    marginTop: '2rem',
    borderRadius: '50%',
    height: 75,
    width: 75,
    margin: '0 auto',
  },
  name: {
    fontWeight: 700,
    color: 'black',
  },
  description: {
    color: 'black',
    margin: '0 1.5rem',
    marginBottom: '1.8rem',
    marginTop: '.6rem',
  },
  footerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1rem',
    marginLeft: '.5rem',
    marginRight: '.5rem',
    justifyContent: 'center',
    alignContent: 'center',
  },
  location: {
    float: 'left',
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: '50%',
    color: 'gray',
  },
  locationBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  dateTime: {
    display: 'flex',
    flexDirection: 'column',
    float: 'right',
    maxWidth: '50%',
    fontWeight: 700,
    color: 'black',
  },
}));

export default useStyles;
