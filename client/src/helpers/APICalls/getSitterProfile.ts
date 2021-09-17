import { FetchOptions } from '../../interface/FetchOptions';
import { Profile } from '../../interface/User';

export async function getSitterProfile(profileId: string): Promise<Profile> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profile/find?_id=${profileId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again.' },
    }));
}

export async function getAllSitterProfiles(): Promise<Profile[]> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profile/all`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again.' },
    }));
}
