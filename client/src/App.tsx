import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import MyBookings from './pages/Booking/MyBookings';
import Payment from './pages/Payment/Payment';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import Conversations from './pages/Conversation/Conversations';
import { ConversationProvider } from './context/useConversationContext';
import './App.css';
import { Fragment } from 'react';
import NavBar from './components/NavBar/NavBar';
import MyProfile from './pages/MyProfile/MyProfile';
import ProfilePhoto from './pages/ProfilePhoto/ProfilePhoto';
import MeetupsList from './pages/Meetups/MeetupsList/MeetupsList';
import SearchSitter from './pages/SearchSitter/SearchSitter';
import MeetupInfoPage from './pages/Meetups/MeetupInfoPage/MeetupInfoPage';
import CreateMeetup from './pages/Meetups/CreateMeetup/CreateMeetup';
import MyMeetupsList from './pages/Meetups/MyMeetupsList/MyMeetupsList';
import Pets from './pages/Pets/Pets';
import CreatePet from './pages/Pets/CreatePet/CreatePet';
import EditPet from './pages/Pets/EditPet/EditPet';
function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <ConversationProvider>
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Fragment>
                    <NavBar />
                    <Route exact path="/dashboard">
                      <Dashboard />
                    </Route>
                    <Route path="/sitter/:profileId">
                      <ProfileDetails />
                    </Route>
                    <Route exact path="/mybookings">
                      <MyBookings />
                    </Route>
                    <Route exact path="/sitters">
                      <SearchSitter />
                    </Route>
                    <Route exact path="/meetups">
                      <MeetupsList />
                    </Route>
                    <Route exact path="/meetup/create">
                      <CreateMeetup />
                    </Route>
                    <Route exact path="/mymeetups">
                      <MyMeetupsList />
                    </Route>
                    <Route exact path="/meetups/:meetupId">
                      <MeetupInfoPage />
                    </Route>
                    <Route path="/profile/:profileId">
                      <ProfileDetails />
                    </Route>
                    <Route exact path="/myprofile">
                      <MyProfile />
                    </Route>
                    <Route exact path="/myprofile/edit/photo">
                      <ProfilePhoto />
                    </Route>
                    <Route exact path="/payment">
                      <Payment />
                    </Route>
                    <Route exact path="/conversations">
                      <Conversations />
                    </Route>
                    <Route exact path="/pets">
                      <Pets />
                    </Route>
                    <Route exact path="/createPet">
                      <CreatePet />
                    </Route>
                    <Route exact path="/editPet">
                      <EditPet />
                    </Route>
                  </Fragment>
                  <Route path="*">
                    <Redirect to="/login" />
                  </Route>
                </Switch>
              </ConversationProvider>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
