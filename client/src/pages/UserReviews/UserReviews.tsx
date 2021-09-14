import { Avatar, Card, CardContent, CardHeader, CssBaseline, Grid, IconButton, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Rating } from '@material-ui/lab';
import { useState } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import useStyles from './useStyles';

export default function UserReviews(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid xs={11} sm={10} md={8} container className={classes.root}>
      <CssBaseline />
      <Grid className={classes.reviewsWrapper}>
        <Grid item></Grid>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </Grid>
    </Grid>
  );
}
