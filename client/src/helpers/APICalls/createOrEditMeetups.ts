import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';
import { Meetup } from '../../interface/Meetup';

export const createNewMeetup = async (
  location: string,
  locationAddress: string,
  locationCityStateZip: string,
  organizer: string,
  name: string,
  date: Date,
  timeStart: string,
  timeEnd: string,
  description: string,
): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      location,
      locationAddress,
      locationCityStateZip,
      organizer,
      name,
      date,
      timeStart,
      timeEnd,
      description,
    }),
    credentials: 'include',
  };
  return await fetch(`/meetup/create`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const editMyMeetup = async (
  meetupId: string,
  organizerId: string,
  location: string,
  locationAddress: string,
  locationCityStateZip: string,
  name: string,
  date: Date,
  timeStart: string,
  timeEnd: string,
  description: string,
): Promise<AuthApiData> => {
  const newData = { location, locationAddress, locationCityStateZip, name, date, timeStart, timeEnd, description };
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newData, meetupId, organizerId }),
    credentials: 'include',
  };
  return await fetch(`/meetup/update`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const meetupRSVP = async (userId: string, meetupId: string): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, meetupId }),
    credentials: 'include',
  };
  return await fetch(`/meetup/register`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};
