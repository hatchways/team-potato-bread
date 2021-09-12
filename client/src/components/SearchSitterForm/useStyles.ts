import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'row',
  },
  locationInputContainer: {
    // flexBasis: 350,
  },
  locationInput: {
    height: '50px',
    lineHeight: '23px',
    border: '1px solid lightgray',
    width: '100%',
  },
  dateInput: {
    height: '50px',
    lineHeight: '23px',
    border: '1px solid lightgray',
    alignSelf: 'center',
    padding: theme.spacing(1, 1, 1, 2),
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
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: '0 2px',
    color: 'inherit',
  },
}));

export default useStyles;
