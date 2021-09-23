import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  conversationBody: {
    height: 'calc(100vh - 135px);',
  },
  sideBar: {
    border: '1px solid hsl(0deg 0% 86%)',
  },
  sideBarEmpty: {
    display: 'flex',
    alignItems: ' center',
    justifyContent: 'space-around',
  },
}));

export default useStyles;
