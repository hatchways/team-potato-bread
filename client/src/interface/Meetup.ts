import { User, Image } from './User';

export interface Meetup {
  _id?: string;
  location: string;
  locationAddress: string;
  locationCityStateZip: string;
  organizer: User;
  name: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  attendees?: User[];
  image?: Image;
  description?: string;
}
