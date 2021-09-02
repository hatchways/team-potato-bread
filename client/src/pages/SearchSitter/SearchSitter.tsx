import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import SearchSitterForm from '../../components/SearchSitterForm/SearchSitterForm';
import SitterCard from '../../components/SitterCard/SitterCard';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Box className={classes.authWrapper}>
        <AuthHeader asideText="Become a sitter" />
      </Box>
      <Grid container className={classes.searchContainer}>
        <Typography className={classes.heading} component="h1" variant="h4">
          Your Search Results
        </Typography>
        <Box className={classes.searchForm}>
          <SearchSitterForm
            search=""
            handleChange={() => {
              console.log();
            }}
          ></SearchSitterForm>
        </Box>
        <Grid item className={classes.userList}>
          <SitterCard></SitterCard>
          <SitterCard></SitterCard>
          <SitterCard></SitterCard>
          <SitterCard></SitterCard>
          <SitterCard></SitterCard>
          <SitterCard></SitterCard>
        </Grid>
      </Grid>
    </Grid>
  );
}
