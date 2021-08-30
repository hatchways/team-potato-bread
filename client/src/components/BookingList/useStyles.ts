import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  bookingList: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    padding: '15px 10px',
  },
  bookingType: {
    marginTop: '10px',
    fontWeight: 'bolder',
    fontSize: 'smaller',
  },
  scrollableArea: {
    overflowY: 'auto',
    height: '400px',
  },
}));

export default useStyles;
