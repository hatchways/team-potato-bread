import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  chatContainer: {
    height: 'calc(100vh - 137px);',
  },
  chatContentWrap: {
    height: 'calc(100vh - 307px);',
    overflowY: 'scroll',
  },
  chatTitle: {
    display: 'flex',
    alignItems: 'flex-start;',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0px 2%',
    height: 80,
    borderBottom: '1px solid hsl(0deg 0% 86%)',
  },
  chatReceiverName: {
    margin: '0px!important',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    paddingBottom: '2%',
  },
  noMargin: {
    margin: '0px!important',
  },
  userMessages: {
    background: '#5565c1',
    color: 'white',
    padding: '0px 16px',
    borderRadius: '15px',
  },
  chatContentBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '2%',
  },
  senderAvatar: {
    width: 46,
    height: 46,
    borderRadius: '50%',
  },
  messagerWrap: {
    display: 'flex',
  },
  messagerWrapRight: {
    display: 'flex',
    marginLeft: 'auto',
  },
  messageText: {
    padding: '0px 16px',
    background: 'rgb(236 236 236);',
    borderRadius: '15px',
  },
  textStyle: {
    fontSize: '1.2rem',
    padding: '10px',
    margin: 0,
  },
  sentTimeStyleLeft: {
    fontSize: '0.9rem',
    textAlign: 'left',
  },
  sentTimeStyleRight: {
    fontSize: '0.9rem',
    textAlign: 'right',
  },
}));

export default useStyles;
