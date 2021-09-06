import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  bookingItem: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e8e5e3',
    borderRadius: '5px',
    margin: '5px 10px',
    padding: '10px 15px',
    flexWrap: 'wrap',
  },
  bookingInfoRow1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookingInfoRow2: {
    display: 'flex',
    alignItems: 'center',
  },
  bookingName: {
    marginLeft: '10px',
    fontWeight: 'bolder',
  },
  acceptedStatus: {
    fontWeight: 'bold',
    margin: '0px 20px auto auto',
    padding: '0px',
  },
  nextBookingItem: {
    border: 'none',
    margin: '15px',
  },
}));

export default useStyles;
