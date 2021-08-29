import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  dateButton: {
    color: 'black',
    fontWeight: 500,
    width: '36px',
    height: '36px',
    margin: '0 2px',
    padding: '0',
    fontSize: '0.6428571428571428rem',
    display: 'flex',
  },

  selectedDate: {
    color: 'white',
    fontWeight: 500,
    backgroundColor: '#cc3527',
    borderRadius: '60%',
    width: '36px',
    height: '36px',
    margin: '0 2px',
    padding: '0',
    fontSize: '0.6428571428571428rem',
  },

  notInMonth: {
    color: 'white',
    fontWeight: 500,
    width: '36px',
    height: '36px',
    margin: '0 2px',
    padding: '0',
    fontSize: '0.6428571428571428rem',
    display: 'flex',
  },

  today: {
    color: 'white',
    fontWeight: 500,
    backgroundColor: '#D0D0D0',
    borderRadius: '60%',
    width: '36px',
    height: '36px',
    margin: '0 2px',
    padding: '0',
    fontSize: '0.6428571428571428rem',
  },
}));

export default useStyles;
