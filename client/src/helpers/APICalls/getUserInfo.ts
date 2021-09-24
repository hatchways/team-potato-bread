import { FetchOptions } from '../../interface/FetchOptions';
import { User } from '../../interface/User';

export async function getUserInfo(userId: string): Promise<User> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/users/find?_id=${userId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again.' },
    }));
}
