import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  petStatusRow: {
    display: 'flex',
    paddingBottom: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  petStatusContent: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  petStatusDate: {
    paddingLeft: '2%',
  },
  petStatusForm: {
    width: '50%',
  },
  petStatusFormBtn: {
    marginTop: '5%',
  },
}));

export default useStyles;
