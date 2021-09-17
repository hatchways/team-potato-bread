import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    justifyContent: 'center',
  },
  uploadButton: {
    margin: '20px auto',
    width: 220,
    height: 50,
    fontWeight: 'bold',
  },
  input: {
    display: 'none',
  },
}));

export default useStyles;
