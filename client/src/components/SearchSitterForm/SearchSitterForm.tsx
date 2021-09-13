import { ChangeEvent, useState, useEffect, SyntheticEvent } from 'react';
import useStyles from './useStyles';
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import InputBase from '@material-ui/core/InputBase';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { User } from '../../interface/User';
import { useDebounce } from 'use-debounce';
import { searchUsers } from '../../helpers/APICalls/searchUsers';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { IconButton } from '@material-ui/core';
import { format } from 'date-fns';
import isValid from 'date-fns/isValid';

interface Props {
  search: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>, newInputValue: string) => void;
  selectedStartDate: Date | null;
  handleStartDateChange: (date: MaterialUiPickersDate) => void;
  selectedEndDate: Date | null;
  handleEndDateChange: (date: MaterialUiPickersDate) => void;
}

const SearchSitterForm = ({
  search,
  handleChange,
  selectedStartDate,
  handleStartDateChange,
  selectedEndDate,
  handleEndDateChange,
}: Props): JSX.Element => {
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

  const formatWeekSelectLabel = (date: any, invalidLabel: string) => {
    const dateClone = new Date(date);

    return dateClone && isValid(dateClone) ? `${format(dateClone, 'd MMMM')}` : invalidLabel;
  };

  const renderDay = (date: any, selectedDate: any, dayInCurrentMonth: any) => {
    const dateClone = new Date(date);

    return (
      <div>
        <IconButton className={classes.day}>
          <span> {format(dateClone, 'd')} </span>
        </IconButton>
      </div>
    );
  };

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
          className={classes.locationInputContainer}
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            autoOk
            renderDay={renderDay}
            clearable
            value={selectedStartDate}
            onChange={handleStartDateChange}
            InputProps={{
              disableUnderline: true,
              startAdornment: <DateRangeIcon color="action" />,
            }}
            className={classes.dateInput}
            labelFunc={formatWeekSelectLabel}
          />
          <DatePicker
            autoOk
            renderDay={renderDay}
            clearable
            value={selectedEndDate}
            onChange={handleEndDateChange}
            InputProps={{
              disableUnderline: true,
              startAdornment: <DateRangeIcon color="action" />,
            }}
            className={classes.dateInput}
            labelFunc={formatWeekSelectLabel}
          />
        </MuiPickersUtilsProvider>
      </div>
    </form>
  );
};

export default SearchSitterForm;
