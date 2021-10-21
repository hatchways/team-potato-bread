import React from 'react';
import useStyles from './useStyles';
import { Box, Typography } from '@material-ui/core';
import { Status } from '../../../interface/Pet';
import moment from 'moment';
interface Props {
  status: Status[];
}
const PetStatus = ({ status }: Props): JSX.Element => {
  const classes = useStyles();
  if (!status.length)
    return (
      <Box className={classes.petStatusRow}>
        <Typography variant="subtitle1" className={classes.petStatusContent}>
          No status!{' '}
        </Typography>
      </Box>
    );
  return (
    <Box className={classes.petStatusRow}>
      <Typography className={classes.petStatusContent}>{status[status.length - 1].description} </Typography>
      <Typography className={classes.petStatusDate} variant="subtitle1">
        {moment(status[status.length - 1].createdAt).fromNow()}
      </Typography>
    </Box>
  );
};

export default PetStatus;
