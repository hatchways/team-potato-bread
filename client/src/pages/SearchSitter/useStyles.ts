import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    minWidth: '100%',
  },
  heading: {
    fontWeight: 700,
  },
  searchForm: {
    marginTop: '3rem',
    marginBottom: '1rem',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    justifySelf: 'center',
    alignSelf: 'center',
  },
  userList: {
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyItems: 'space-evenly',
    // alignSelf: 'center',
    // justifySelf: 'center',
    // minWidth: '100vw',
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 23,
  },
  welcome: {
    fontSize: 30,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
    textAlign: 'center',
  },
  cardsContainer: {
    // minWidth: '100%',
  },
}));

export default useStyles;
