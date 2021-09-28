import { CssBaseline, Divider, Grid, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';

export default function MeetupsList(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.pageContent}>
        <Typography className={classes.heading} component="h2" variant="h4">
          Welcome To LovingSitter
        </Typography>
        <Typography variant="subtitle1">
          A place for pet lovers to get together and provide services or just have fun meeting others.
        </Typography>
        {/* 1st grid section for meetups */}
        <Grid className={classes.sectionGrid}>
          <img
            className={classes.sectionImg}
            src="https://images.unsplash.com/photo-1500862341394-4477ad3e8af2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
          />
          <Typography className={classes.sectionType} variant="body1">
            Find other pet lovers in your area in pet meetup events
          </Typography>
        </Grid>
        <Divider />
        {/* 2nd grid section for sitters */}
        <Grid className={classes.sectionGrid}>
          <Typography className={classes.sectionType} variant="body1">
            Find a pet sitter who loves your furry friends as much as you do
          </Typography>
          <img
            className={classes.sectionImg}
            src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
          />
        </Grid>
        <Divider />
        {/* 3rd grid section for messaging */}
        <Grid className={classes.sectionGrid}>
          <img
            className={classes.sectionImg}
            src="https://images.unsplash.com/photo-1549488799-496ecb87b5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          />
          <Typography className={classes.sectionType} variant="body1">
            Chat with other pet enthusiasts from all over the world with our messaging feature
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
