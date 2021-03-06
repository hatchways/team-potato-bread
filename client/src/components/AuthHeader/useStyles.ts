import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '100%',
    height: '100px',
  },
  brand: {
    marginRight: 'auto',
    marginLeft: 35,
  },
  authWrapper: {
    marginRight: 35,
    display: 'flex',
    flexFlow: 'row wrap',
  },
  accAside: {
    fontSize: 12,
    color: 'black',
    fontWeight: 700,
    textAlign: 'center',
    marginRight: 35,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
    textTransform: 'uppercase',
    textDecoration: 'underline',
  },
  link: { textDecoration: 'none' },
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    boxShadow: 'none',
    marginRight: 15,
    textTransform: 'uppercase',
  },
  accBtnFilled: {
    marginRight: 35,
    backgroundColor: 'red',
    color: 'white',
  },
}));

export default useStyles;
