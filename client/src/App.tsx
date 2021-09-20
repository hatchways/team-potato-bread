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
import './App.css';
import { Fragment } from 'react';
import NavBar from './components/NavBar/NavBar';
import MyProfile from './pages/MyProfile/MyProfile';
import ProfilePhoto from './pages/ProfilePhoto/ProfilePhoto';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
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
                  <Route exact path="/myprofile">
                    <MyProfile />
                  </Route>
                  <Route exact path="/myprofile/edit/photo">
                    <ProfilePhoto />
                  </Route>
                  <Route exact path="/mybookings">
                    <MyBookings />
                  </Route>
                  <Route exact path="/payment">
                    <Payment />
                  </Route>
                </Fragment>
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
