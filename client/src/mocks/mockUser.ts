import { User } from '../interface/User';

const mockLoggedInUser: User = {
  email: 'mockLoggedInUser@gmail.com',
  username: 'mock LoggedIn user',
  avatar: `https://robohash.org/mockLoggedInUser@gmail.com.png?set=set4`,
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

const mockOtherUsers: User[] = [mockOtherUser1, mockOtherUser2, mockOtherUser3];

export { mockLoggedInUser, mockOtherUsers };
