import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  text: string;
  linkTo: string;
  linkText: string;
}

const AuthSubText = ({ linkTo, linkText, text }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Typography className={classes.text}>
        {text}&nbsp;
        <Link to={linkTo} className={classes.link}>
          {linkText}
        </Link>
      </Typography>
    </Box>
  );
};

export default AuthSubText;
