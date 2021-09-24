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
    height: 100,
    width: 100,
    margin: '0 auto',
  },
  name: {
    fontWeight: 700,
    color: 'black',
  },
  subTitle: {
    color: 'gray',
  },
  rating: {
    marginTop: '.5rem',
  },
  description: {
    color: 'black',
    fontWeight: 700,
    margin: '0 2rem',
    marginBottom: '1.8rem',
    marginTop: '.6rem',
  },
  footerWrapper: {
    marginTop: '1rem',
    marginLeft: '.5rem',
    marginRight: '.5rem',
    height: 20,
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
  rate: {
    float: 'right',
    maxWidth: '50%',
    fontWeight: 700,
    fontSize: '16px',
    color: 'black',
  },
}));

export default useStyles;
