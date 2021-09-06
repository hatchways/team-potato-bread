import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  mgnBookingHeader: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '100%',
  },
  brand: {
    marginRight: 'auto',
    marginLeft: 35,
  },
  authWrapper: {
    marginRight: 35,
    display: 'flex',
    flexFlow: 'row wrap',
  },
  accAside: {
    fontSize: 12,
    color: 'black',
    fontWeight: 700,
    textAlign: 'center',
    marginRight: 35,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
  },
}));

export default useStyles;
