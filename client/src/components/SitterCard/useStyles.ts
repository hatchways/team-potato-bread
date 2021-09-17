import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    maxWidth: 345,
    margin: '2rem',
    flex: '1 1 300px',
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
    height: 150,
    width: 150,
    margin: '0 auto',
  },
  name: {
    fontWeight: 700,
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
