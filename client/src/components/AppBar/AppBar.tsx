import { AppBar, Avatar, Badge, Box, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { useState } from 'react';

const NavBar = (): JSX.Element => {
  const classes = useStyles();

  const user = {
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
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={notificationMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isNotificationOpen}
        onClose={handleNotificationClose}
        className={classes.notificationMenu}
      >
        <MenuItem onClick={handleMenuClose}>
          <Box>
            <Avatar className={classes.avatar} variant="square" />
          </Box>
          <Box className={classes.notificationItemContent}>
            <Typography className={classes.notificationText}>Mary has requested your service for 2 hours</Typography>
            <Typography className={classes.notificationSubject}>Dog sitting</Typography>
            <Typography className={classes.notificationDate}>09/07/2021</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </Grid>
  );

  // const notificationMenuItem = (props: any) => MenuItem;

  const menuId = 'primary-search-account-menu';
  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleMenuClose}
      className={classes.profileMenu}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge variant="dot" color="primary">
            {/* <MailIcon /> */}
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge invisible={true} variant="dot" color="primary">
            {/* <NotificationsIcon /> */}
          </Badge>
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
          <Badge variant="dot" color="primary">
            {/* <AccountCircle /> */}
          </Badge>
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
          <Badge invisible={true} variant="dot" color="primary">
            {/* <AccountCircle /> */}
          </Badge>
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
              <Badge className={classes.notificationBadge} color="secondary" variant="dot" invisible={false}>
                <Typography className={classes.navLink} variant="h6">
                  Notifications
                </Typography>
              </Badge>
            </Box>
            <Badge className={classes.notificationBadge} color="secondary" variant="dot" invisible={true}>
              <Typography className={classes.navLink} variant="h6">
                My Jobs
              </Typography>
            </Badge>
            <Badge className={classes.notificationBadge} color="secondary" variant="dot" invisible={false}>
              <Typography className={classes.navLink} variant="h6">
                Messages
              </Typography>
            </Badge>
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
