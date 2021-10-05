import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  conversationBody: {
    '$:first-child': {
      marginTop: '0px!important',
    },
  },
  conversationTitle: {
    height: 80,
    borderBottom: '1px solid hsl(0deg 0% 86%)',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 5%',
  },
  conversationTitleH: {
    margin: '0px!important',
  },
  userAvatarBox: {
    flex: 1,
  },
  userNameBox: {
    flex: 2,
  },
  userName: {
    margin: '0px!important',
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  userSubtitle: {
    color: 'gray',
    margin: 'none',
  },
  userMessageDate: {
    flex: 1,
    color: 'gray',
  },
  conversationRow: {
    '&:hover': {
      cursor: 'pointer',
      background: '#f7f7f7',
    },
    '&:fucos': {
      cursor: 'pointer',
      background: '#f7f7f7',
    },
    padding: '3% 5%',
    borderRadius: '5%',
    margin: '2px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid gray',
    position: 'relative',
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: '50%',
  },
  newMessages: {
    width: 10,
    height: 10,
    position: 'absolute',
    background: 'red',
    top: '5px',
    right: '10px',
    borderRadius: '50%',
  },
}));

export default useStyles;
