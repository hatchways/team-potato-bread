import { useEffect, FormEvent, useState, ChangeEvent } from 'react';
import { CssBaseline, Box, Grid, TextField, Typography, Button, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import MeetupCard from '../../components/MeetupCard/MeetupCard';
import { Meetup } from '../../interface/Meetup';
import { useAuth } from '../../context/useAuthContext';
import { getAllMeetups, searchPetMeetups } from '../../helpers/APICalls/getMeetupInfo';
import DashboardSideBanner from '../../components/DashboardSideBanner/DashboardSideBanner';
import { mockMeetup } from '../../mocks/mockUser';

interface Props {
  loggedInUser: User;
}

export default function MeetupsList(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const [search, setSearch] = useState<string>('test');
  const [petMeetups, setPetMeetups] = useState<Meetup[]>([mockMeetup]);

  //   useEffect(() => {
  //     listAllMeetups();
  //   }, []);

  const listAllMeetups = () => {
    getAllMeetups().then((data) => {
      setPetMeetups(data);
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPetMeetups({ search }).then((data) => {
      setPetMeetups(data);
    });
  };

  const meetups = petMeetups.map((event) => <MeetupCard meetup={event} key={event._id} />);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.container}>
        <Grid item className={classes.settingSideMenu}>
          <DashboardSideBanner loggedInUser={loggedInUser as User} />
        </Grid>
        <Grid item className={classes.pageContent}>
          <Typography className={classes.heading} component="h2" variant="h4">
            Pet Meetup Events
          </Typography>
          <Box className={classes.searchForm}>
            <form action="/meetup/find" method="GET" onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
              <TextField
                id="search"
                label="Search By City/State/Country"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
            </form>
            <Button className={classes.resetBtn} variant="contained" color="primary" onClick={listAllMeetups}>
              Reset
            </Button>
          </Box>
          {petMeetups.length !== 0 ? (
            <Grid item className={classes.meetupsList}>
              {meetups}
            </Grid>
          ) : (
            <Typography variant="h3" align="center">
              No Pet Meetups Found
            </Typography>
          )}
          <Button variant="outlined" color="primary" className={classes.outlineBtn}>
            Show More
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
