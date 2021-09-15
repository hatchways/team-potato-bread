import { AppBar, Avatar, Badge, Box, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { useState } from 'react';
import avatar from '../../Images/b1f0e680702e811aa8ba333cb19c0e0ea95e8e31.png';
import avatar2 from '../../Images/d9fc84a0d1d545d77e78aaad39c20c11d3355074.png';
import { User } from '../../interface/User';
import NotificationList from '../Notification/NotificationList/NotificationList';
import NotificationCenter from '../Notification/NotificationsCenter';

const NavBar = (): JSX.Element => {
  const classes = useStyles();

  const user: User = {
    email: '',
    username: '',
    avatar: '',
  };

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);
  const isProfileMenuOpen = Boolean(profileAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isNotificationOpen = Boolean(notificationAnchorEl);

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

  const notificationMenuId = 'primary-notification-menu';
  const renderNotificationMenu = (
    <Grid>
      <Menu
        anchorEl={notificationAnchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        id={notificationMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isNotificationOpen}
        onClose={handleNotificationClose}
        className={classes.notificationMenu}
      >
        <MenuItem onClick={handleMenuClose}>
          {/* <Box>
            <Avatar className={classes.avatar} src={avatar2} variant="square" />
          </Box> */}
          <Box className={classes.notificationItemContent}>
            {/* <Typography className={classes.notificationText}>Marry has requested your service for 2 hours</Typography>
            <Typography className={classes.notificationSubject}>Dog sitting</Typography>
            <Typography className={classes.notificationDate}>09/07/2021</Typography> */}
            <NotificationList />
          </Box>
        </MenuItem>
        {/* <MenuItem onClick={handleMenuClose}>
          <Box>
            <Avatar className={classes.avatar} src={avatar} variant="square" />
          </Box>
          <Box className={classes.notificationItemContent}>
            <Typography className={classes.notificationText}>Scott has requested your service for 2 days</Typography>
            <Typography className={classes.notificationSubject}>Dog sitting</Typography>
            <Typography className={classes.notificationDate}>09/07/2021</Typography>
          </Box>
        </MenuItem> */}
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
      <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
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
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge variant="dot" color="primary"></Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge invisible={true} variant="dot" color="primary"></Badge>
        </IconButton>
        <p>My Jobs</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="messages of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge variant="dot" color="primary"></Badge>
        </IconButton>
        <p>Messages</p>
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
          <img src={logo} />
        </IconButton>
        <div className={classes.sectionDesktop}>
          <Box className={classes.navWrapper}>
            <Box onClick={handleNotificationOpen}>
              <NotificationCenter text="Notifications" />
              {/* <Badge className={classes.notificationBadge} color="secondary" variant="dot" invisible={false}>
                <Typography className={classes.navLink} variant="h6">
                  Notifications
                </Typography>
              </Badge> */}
            </Box>
            <Badge className={classes.notificationBadge} color="secondary" variant="dot" invisible={true}>
              <Typography className={classes.navLink} variant="h6">
                My Jobs
              </Typography>
            </Badge>
            <NotificationCenter text="Message" />
            {/* <Badge className={classes.notificationBadge} color="secondary" variant="dot" invisible={false}>
              <Typography className={classes.navLink} variant="h6">
                Messages
              </Typography>
            </Badge> */}
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
    </AppBar>
  );
};

export default NavBar;
