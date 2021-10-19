import React from 'react';
import useStyles from './useStyles';
import { Box, Typography } from '@material-ui/core';
const PetStatus = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.petStatusRow}>
      <Typography className={classes.petStatusContent}>Pet status </Typography>
      <Typography className={classes.petStatusDate} variant="subtitle1">
        2 days ago
      </Typography>
    </Box>
  );
};

export default PetStatus;
