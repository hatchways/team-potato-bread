import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: '5px',
    textTransform: 'uppercase',
  },
  inputs: {
    marginTop: '.3rem',
    height: '2rem',
    padding: '10px',
    border: '1px solid lightgray',
    borderRadius: theme.shape.borderRadius,
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  demo: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#00A300',
  },
}));

export default useStyles;
