import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 14,
    color: 'rgb(0,0,0,1)',
    paddingLeft: '5px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
}));

export default useStyles;
