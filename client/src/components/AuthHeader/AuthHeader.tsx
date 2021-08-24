import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { Typography } from '@material-ui/core';

interface Props {
  asideText: string;
}

const AuthHeader = ({ asideText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} className={classes.authHeader}>
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
    </Box>
  );
};

export default AuthHeader;
