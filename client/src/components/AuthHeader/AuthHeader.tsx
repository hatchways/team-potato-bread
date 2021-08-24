import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { Box, Paper, Typography } from '@material-ui/core';
import logo from '../../Images/logo.png';

interface Props {
  asideText: string;
}

const AuthHeader = ({ asideText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.authHeader}>
      <Box className={classes.brand}>
        <img src={logo} />
      </Box>
      <Typography className={classes.accAside}>{asideText}</Typography>
      <Link to="/login" className={classes.link}>
        <Button color="primary" className={classes.accBtn} variant="outlined">
          Login
        </Button>
      </Link>
      <Link to="/signup" className={classes.link}>
        <Button color="primary" className={`${classes.accBtn} ${classes.accBtnFilled}`} variant="contained">
          Sign Up
        </Button>
      </Link>
    </Paper>
  );
};

export default AuthHeader;
