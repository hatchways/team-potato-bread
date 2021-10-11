import { AppBar, Badge, Box, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { User } from '../../interface/User';
import NotificationList from '../Notification/NotificationList/NotificationList';
import NotificationCenter from '../Notification/NotificationsCenter';

const NavBar = (): JSX.Element => {
  const classes = useStyles();
  const { logout, loggedInUser } = useAuth();

  const user: User = {
    email: loggedInUser?.email as string,
    username: loggedInUser?.username as string,
    avatar: loggedInUser?.avatar as string,
  };

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationMessageAnchorEl, setNotificationMessageAnchorEl] = useState<null | HTMLElement>(null);
  const isProfileMenuOpen = Boolean(profileAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isNotificationOpen = Boolean(notificationAnchorEl);
  const isNotificationMessageOpen = Boolean(notificationMessageAnchorEl);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setProfileAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleNotificationOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleNotificationMessageOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationMessageAnchorEl(event.currentTarget);
  };

  const handleNotificationMessageClose = () => {
    setNotificationMessageAnchorEl(null);
  };
  const handleLogout = () => {
    handleMenuClose();
    logout();
  };

  const notificationMenuId = 'primary-notification-menu';
  const renderNotificationMenu = (
    <Grid>
      <Menu
        anchorEl={notificationAnchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        id={notificationMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isNotificationOpen}
        onClose={handleNotificationClose}
        className={classes.notificationMenu}
      >
        <NotificationList text="notification" />
      </Menu>
    </Grid>
  );
  const renderNotificationMessageMenu = (
    <Grid>
      <Menu
        anchorEl={notificationMessageAnchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        id={notificationMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isNotificationMessageOpen}
        onClose={handleNotificationMessageClose}
        className={classes.notificationMenu}
      >
        <NotificationList text="message" />
      </Menu>
    </Grid>
  );

  const menuId = 'primary-search-account-menu';
  const renderProfileMenu = (
    <Menu
      style={{ zIndex: 1301 }}
      anchorEl={profileAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to={`/myprofile`} className={classes.navLinkSmall}>
          My Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <Typography className={classes.navLinkSmall}>Logout</Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleNotificationOpen}>
        <IconButton aria-label="show 4 new mails" color="inherit"></IconButton>
        <NotificationCenter text="Notifications" mode="mobile" />
      </MenuItem>
      <MenuItem>
        <p>My Pet Meetups</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge invisible={true} variant="dot" color="primary"></Badge>
        </IconButton>
        <p>My Jobs</p>
      </MenuItem>
      <MenuItem onClick={handleNotificationMessageOpen}>
        <IconButton
          aria-label="messages of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        ></IconButton>
        <NotificationCenter text="Messages" mode="mobile" />
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge invisible={true} variant="dot" color="primary"></Badge>
        </IconButton>
        <p>My Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.brand} color="inherit" aria-label="home">
          <Link to={'/dashboard'}>
            <img src={logo} />
          </Link>
        </IconButton>
        <div className={classes.sectionDesktop}>
          <Box className={classes.navWrapper}>
            <Box onClick={handleNotificationOpen}>
              <NotificationCenter text="Notifications" mode="normal" />
            </Box>
            <Badge className={classes.notificationBadge} color="secondary" variant="dot" invisible={true}>
              <Typography>
                <NavLink
                  to={{ pathname: `/mymeetups` }}
                  className={classes.navLink}
                  activeClassName={classes.activeLink}
                >
                  My Pet Meetups
                </NavLink>
              </Typography>
              <NavLink
                to={{ pathname: `/mybookings` }}
                className={classes.navLink}
                activeClassName={classes.activeLink}
              >
                My Jobs
              </NavLink>
            </Badge>
            <Badge className={classes.notificationBadge} color="secondary" variant="dot" invisible={false}>
              <Typography className={classes.navLink} variant="h6">
                <Link className={classes.msgLink} to="/conversations">
                  Messages
                </Link>
              </Typography>
            </Badge>
            <Box onClick={handleNotificationMessageOpen}>
              <NotificationCenter text="Messages" mode="normal" />
            </Box>
            <Box
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              className={classes.navLink}
            >
              <AvatarDisplay loggedIn user={user}></AvatarDisplay>
            </Box>
          </Box>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="default"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
      {renderProfileMenu}
      {renderMobileMenu}
      {renderNotificationMenu}
      {renderNotificationMessageMenu}
    </AppBar>
  );
};

export default NavBar;
