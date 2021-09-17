import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
