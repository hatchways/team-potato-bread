import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  myProfileSideBanner: {
    textAlign: 'left',
    margin: 25,
  },
  myProfileSideMenu: {
    '& p': {
      marginTop: 10,
    },
  },
  navigation: {
    textDecoration: 'none',
    color: 'black',
  },
  activeLink: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    paddingLeft: '5px',
    borderLeft: '2px solid',
  },
}));

export default useStyles;
