import { CssBaseline, Grid } from '@material-ui/core';
import { useParams } from 'react-router';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ReviewProfile from '../../components/ReviewProfile/ReviewProfile';
import useStyles from './useStyles';
import { getUserReviews } from '../../helpers/APICalls/getUserReviews';
import { getSitterProfile } from '../../helpers/APICalls/getSitterProfile';
import { useEffect, useState } from 'react';
import { Profile, Review } from '../../interface/User';

type idParams = {
  userId: string;
};

export default function UserReviews(): JSX.Element {
  const classes = useStyles();
  const { userId } = useParams<idParams>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    async function getCurrentUserReviews() {
      const response = await getUserReviews({ userId: userId });
      if (response && response.reviews) setReviews(response.reviews);
    }

    async function getCurrentUserProfile() {
      // currently using the _id of the profile document itself
      const response = await getSitterProfile('61425c735a45520428edc003');
      if (response && response) setProfile(response);
    }

    getCurrentUserProfile();
    getCurrentUserReviews();
  }, [userId]);

  return (
    <Grid item xs={11} sm={10} md={8} className={classes.root}>
      <CssBaseline />
      {<ReviewProfile profile={profile} />}
      <Grid className={classes.reviewsWrapper}>
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review._id} />;
        })}
      </Grid>
    </Grid>
  );
}
