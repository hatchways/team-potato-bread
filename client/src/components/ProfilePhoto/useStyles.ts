import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  pageTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    margin: 20,
    fontFamily: theme.typography.fontFamily,
  },
  avatarImage: {
    width: 150,
    height: 150,
    margin: 25,
  },
  subtext: {
    width: 175,
    textAlign: 'center',
    color: 'gray',
  },
  uploadButton: {
    margin: 35,
    width: 220,
    height: 50,
    borderRadius: theme.shape.borderRadius,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  input: {
    display: 'none',
  },
  delete: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  deleteText: {
    paddingLeft: 10,
    color: 'gray',
  },
}));

export default useStyles;
