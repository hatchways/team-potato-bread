import { User } from '../interface/User';
import { Profile } from '../interface/User';
import { Meetup } from '../interface/Meetup';

const mockLoggedInUser: User = {
  email: 'mockLoggedInUser@gmail.com',
  username: 'mock LoggedIn user',
  avatar: `https://robohash.org/mockLoggedInUser@gmail.com.png?set=set4`,
};

const mockProfileUser: Profile = {
  _id: '123abc',
  subtitle: 'Loving Pet Sitter',
  sitter: true,
  avgRating: 3.5,
  firstName: 'Jane',
  lastName: 'Doe',
  gender: 'female',
  location: 'Toronto, Ontario',
  ratePerHour: 14,
  description:
    'Lorem ipsum delorum Lorem ipsum delorum Lorem ipsum delorum Lorem ipsum delorum Lorem ipsum delorum Lorem ipsum delorum Lorem ipsum delorum Lorem ipsum delorum Lorem ipsum delorum Lorem ipsum delorum',
};

const mockOtherUser1: User = {
  username: 'Mock test user 1',
  email: 'mockTestUser1@gmail.com',
  avatar: `https://robohash.org/mockTestUser1@gmail.com.png?set=set4`,
};
const mockOtherUser2: User = {
  username: 'Mock test user 2',
  email: 'mockTestUser2@gmail.com',
  avatar: `https://robohash.org/mockTestUser2@gmail.com.png?set=set4`,
};
const mockOtherUser3: User = {
  username: 'Mock test user 3',
  email: 'mockTestUser3@gmail.com',
  avatar: `https://robohash.org/mockTestUser3@gmail.com.png?set=set4`,
};

const mockMeetup: Meetup = {
  _id: '123abc',
  location: 'zilker park',
  locationAddress: '2207 Lou Neff Rd',
  locationCityStateZip: 'Austin, TX 78746',
  organizer: mockOtherUser3,
  name: 'Austin Fall Boxer Meetup',
  timeStart: '10:00 am',
  timeEnd: '5:00 pm',
  attendees: [mockLoggedInUser, mockOtherUser1],
  image:
    'https://images.unsplash.com/photo-1601579112934-17ac2aa86292?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80',
  description:
    'This is an event for all the Austin area boxers, their siblings, and their cousins to enjoy a fun time outdoors now that it is getting cooler outside. There will be kiddie pools, water stations, treat stations, and consessions for pet parents all over the park.',
};

const mockOtherUsers: User[] = [mockOtherUser1, mockOtherUser2, mockOtherUser3];

export { mockLoggedInUser, mockOtherUsers, mockProfileUser, mockMeetup };
