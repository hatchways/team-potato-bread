import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textNormal: {
    fontWeight: 700,
    color: 'black',
    marginLeft: 70,
    paddingRight: 5,
    cursor: 'pointer',
    fontFamily: 'Open Sans, sans-serif, Roboto',
  },
  textMobile: {
    fontWeight: 'inherit',
    fontSize: 'inherit',
    margin: 'inherit',
    fontFamily: 'Open Sans, sans-serif, Roboto',
  },
}));

export default useStyles;
