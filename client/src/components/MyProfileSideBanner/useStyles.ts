import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  myProfileSideBanner: {
    textAlign: 'left',
    margin: 25,
  },
  navigation: {
    textDecoration: 'none',
    color: 'black',
  },
  activeLink: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
