import { ChangeEvent, useState, useEffect, SyntheticEvent } from 'react';
import useStyles from './useStyles';
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import InputBase from '@material-ui/core/InputBase';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { User } from '../../interface/User';
import { useDebounce } from 'use-debounce';
import { searchUsers } from '../../helpers/APICalls/searchUsers';
import TextField from '@material-ui/core/TextField';

interface Props {
  search: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>, newInputValue: string) => void;
}
const SearchSitterForm = ({ search, handleChange }: Props): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  // limit our call to the api with a debounced value at max of 1 per 0.5 seconds
  const [debouncedSearch] = useDebounce(search, 500);

  const classes = useStyles();

  const saveOptions = (users: User[]) => {
    setOptions(users);
  };

  useEffect(() => {
    let active = true;

    async function searchAndSaveUsers() {
      // send request to backend API to get users limited to 20.
      setLoading(true);
      const response = await searchUsers({
        search: debouncedSearch,
      });

      if (active && response && response.users) {
        console.log(response);
        saveOptions(response.users);
      }
      setLoading(false);
    }

    searchAndSaveUsers();

    return () => {
      active = false;
    };
  }, [debouncedSearch]);

  // creates a combobox search which is dynamically updated with call's to the API
  return (
    <form
      onSubmit={(e: SyntheticEvent) => {
        e.preventDefault();
      }}
    >
      <div className={classes.container}>
        <Autocomplete
          id="asynchronous-search"
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          getOptionSelected={(option, value) => option.username === value.username}
          getOptionLabel={(option) => option.username}
          options={options}
          loading={loading}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onInputChange={handleChange}
          inputValue={search}
          noOptionsText="Location Not Detected"
          freeSolo
          renderInput={(params) => (
            <div className={classes.locationInput}>
              <InputBase
                {...params.inputProps}
                placeholder="Your location"
                classes={{
                  root: classes.searchRoot,
                  input: classes.searchInput,
                }}
                inputProps={{
                  'aria-label': 'search',
                  ref: params.InputProps.ref,
                  disableUnderline: true,
                }}
                startAdornment={
                  <div className={classes.searchIcon}>
                    <SearchIcon color="primary" />
                  </div>
                }
              />
            </div>
          )}
        />
        <TextField
          id="date"
          type="date"
          InputProps={{
            startAdornment: <DateRangeIcon color="action" />,
            disableUnderline: true,
          }}
          className={classes.dateInput}
          defaultValue="2017-05-24"
          inputProps={{
            'aria-label': 'date',
          }}
        />
      </div>
    </form>
  );
};

export default SearchSitterForm;
