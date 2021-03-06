import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    justifySelf: 'center',
    minWidth: '100%',
    minHeight: 75,
    justifyContent: 'center',
  },
  brand: {
    marginRight: 'auto',
    marginLeft: 35,
  },
  navWrapper: {
    marginRight: 35,
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  navLink: {
    fontWeight: 700,
    color: 'black',
    marginLeft: 70,
    paddingRight: 5,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  navLinkSmall: {
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center',
    padding: 5,
  },
  activeLink: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  navText: {
    fontWeight: 700,
  },
  notificationBadge: {
    color: 'yellow',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  notificationMenu: {
    '& .MuiPaper-root': {
      borderTop: '4px solid black',
      minWidth: '25rem',
      borderRadius: 0,
    },
  },
  avatar: {
    height: '4rem',
    width: '4rem',
  },
  notificationItemContent: {
    marginLeft: '8px',
  },
  notificationText: {
    fontWeight: 700,
  },
  notificationSubject: {
    fontWeight: 700,
    color: 'lightgray',
  },
  notificationDate: {
    fontWeight: 700,
    paddingTop: '5px',
    alignSelf: 'felx-end',
  },
  msgLink: {
    textDecoration: 'none',
    color: 'black',
  },
}));

export default useStyles;
