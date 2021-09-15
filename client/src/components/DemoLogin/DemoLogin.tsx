import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

const DemoLogin = (): JSX.Element => {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleDemoLogin = () => {
    login('jondoe@vmail.com', '12345678').then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Button
      onClick={() => {
        handleDemoLogin();
      }}
      type="button"
      size="large"
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      {'Demo user'}
    </Button>
  );
};

export default DemoLogin;
