import { FetchOptions } from '../../interface/FetchOptions';
import { Meetup } from '../../interface/Meetup';

interface Props {
  search: string;
}

export async function getMeetupInfo(meetupId: string): Promise<Meetup> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/meetup/find?_id=${meetupId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again.' },
    }));
}

export async function searchPetMeetups({ search }: Props): Promise<Meetup[]> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/meetup?search=${search}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to conect to server. Please try again.' },
    }));
}

export async function getAllMeetups(): Promise<Meetup[]> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/meetup/all`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again.' },
    }));
}

export async function getMyMeetups(userId: string): Promise<Meetup[]> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/meetup/organizer?_id=${userId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again.' },
    }));
}
