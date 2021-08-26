import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    fontWeight: 700,
  },
  link: {
    fontWeight: 700,
    color: 'red',
    textDecoration: 'underline',
  },
}));

export default useStyles;
