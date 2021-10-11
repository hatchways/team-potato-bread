import { User } from './User';
import { Meetup } from './Meetup';

export interface AuthApiDataSuccess {
  message: string;
  user: User;
  token: string;
}

export interface AuthApiData {
  error?: { message: string };
  success?: AuthApiDataSuccess;
  meetup?: Meetup;
}
