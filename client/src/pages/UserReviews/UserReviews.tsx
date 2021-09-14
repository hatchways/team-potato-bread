import { CssBaseline, Grid } from '@material-ui/core';
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
