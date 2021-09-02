import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'row',
  },
  locationInput: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: '#E9EEF9',
    marginLeft: 0,
    height: '50px',
    lineHeight: '23px',
    border: '1px solid lightgray',

    width: `calc(${drawerWidth} - 1rem)`,
  },
  dateInput: {
    height: '50px',
    lineHeight: '23px',
    border: '1px solid lightgray',
    alignSelf: 'center',
    padding: theme.spacing(1, 1, 1, 0),
  },
  searchRoot: {
    color: 'inherit',
    width: '100%',
    height: '100%',
  },
  searchInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
    fontWeight: 600,
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    marginLeft: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
