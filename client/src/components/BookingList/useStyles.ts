import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  bookingList: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    padding: '15px 10px',
    margin: '30px',
  },
  bookingType: {
    marginTop: '10px',
    fontWeight: 'bolder',
    fontSize: 'smaller',
  },
  scrollableArea: {
    overflowY: 'auto',
    maxHeight: '400px',
  },
  nextBooking: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    padding: '15px 10px',
    margin: '30px',
    height: '200px',
    justifyContent: 'center',
  },
  nextBookingType: {
    marginLeft: '15px',
    fontSize: 'larger',
    fontWeight: 'bolder',
  },
}));

export default useStyles;
