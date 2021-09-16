import { FetchOptions } from '../../interface/FetchOptions';
import { UserReviewsApiData } from '../../interface/User';

interface Props {
  userId: string;
}

export async function getUserReviews({ userId }: Props): Promise<UserReviewsApiData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/review/${userId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
