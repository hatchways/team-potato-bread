import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';
import AuthSubText from '../../../components/AuthSubText/AuthSubText';

interface Props {
  handleSubmit: (
    {
      username,
      email,
      password,
    }: {
      email: string;
      password: string;
      username: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required').max(40, 'Username is too long'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            id="email"
            label={<Typography className={classes.label}>Email address</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
              disableUnderline: true,
            }}
            name="email"
            autoComplete="email"
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
            // variant="outlined"
            placeholder="Your email"
          />
          <TextField
            id="username"
            label={<Typography className={classes.label}>Username</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
              disableUnderline: true,
            }}
            name="username"
            autoComplete="username"
            autoFocus
            helperText={touched.username ? errors.username : ''}
            error={touched.username && Boolean(errors.username)}
            value={values.username}
            onChange={handleChange}
            // variant="outlined"
            placeholder="Name"
          />
          <TextField
            id="password"
            label={<Typography className={classes.label}>Password</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
              disableUnderline: true,
            }}
            type="password"
            autoComplete="current-password"
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
            // variant="outlined"
            placeholder="Password"
          />

          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Sign up'}
            </Button>
            <AuthSubText linkTo="/login" linkText="Login" text="Already a member?"></AuthSubText>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
