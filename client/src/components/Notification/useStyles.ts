import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: 'center',
    marginRight: 35,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
  },

  text: {
    fontSize: 12,
    color: 'black',
    fontWeight: 700,
    textAlign: 'center',
  },
}));

export default useStyles;
