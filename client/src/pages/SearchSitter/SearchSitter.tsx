import { useEffect, FormEvent, useState, ChangeEvent } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import SitterCard from '../../components/SitterCard/SitterCard';
import { Profile } from '../../interface/User';
import { Button, InputAdornment } from '@material-ui/core';
import { getAllSitterProfiles } from '../../helpers/APICalls/getSitterProfile';
import { searchProfiles } from '../../helpers/APICalls/searchUsers';

export default function SearchSitter(): JSX.Element {
  const classes = useStyles();
  const [search, setSearch] = useState<string>('test');
  const [allSitters, setAllSitters] = useState<Profile[]>([]);

  useEffect(() => {
    getAllSitters();
  }, []);

  const getAllSitters = () => {
    getAllSitterProfiles().then((data) => {
      setAllSitters(data);
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchProfiles({ search }).then((data) => {
      setAllSitters(data);
    });
  };

  const sitters = allSitters.map((profile) => <SitterCard sitter={profile} key={profile._id} />);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.searchContainer}>
        <Typography className={classes.heading} component="h2" variant="h4">
          LovingSitter Profiles
        </Typography>
        <Box className={classes.searchForm}>
          <form action="/profile/find" method="GET" onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
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
          <Button className={classes.resetBtn} variant="contained" color="primary" onClick={getAllSitters}>
            Reset
          </Button>
        </Box>
        {allSitters.length !== 0 ? (
          <Grid item className={classes.userList}>
            {sitters}
          </Grid>
        ) : (
          <Typography variant="h3">No Sitters Found</Typography>
        )}
        <Button variant="outlined" color="primary" className={classes.outlineBtn}>
          Show More
        </Button>
      </Grid>
    </Grid>
  );
}
