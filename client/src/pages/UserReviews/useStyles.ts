import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    justifyContent: 'center',
    margin: '0 auto',
  },
  reviewCard: {
    // minWidth: '100vw',
  },
  reviewsWrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: 1,
    justifyContent: 'center',
  },
}));

export default useStyles;
