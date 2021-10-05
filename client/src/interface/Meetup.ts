import { User } from './User';

export interface Meetup {
  _id?: string;
  location?: string;
  locationAddress?: string;
  locationCityStateZip?: string;
  organizer: User;
  name?: string;
  date?: Date;
  timeStart?: string;
  timeEnd?: string;
  attendees?: User[];
  image?: string;
  description?: string;
}
