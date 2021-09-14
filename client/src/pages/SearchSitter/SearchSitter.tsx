import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import SearchSitterForm from '../../components/SearchSitterForm/SearchSitterForm';
import SitterCard from '../../components/SitterCard/SitterCard';
import { Button } from '@material-ui/core';
import { useState, ChangeEvent } from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const [search, setSearch] = useState<string>('test');
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(new Date());

  const handleChange = (e: ChangeEvent<HTMLInputElement>, newInputValue: string) => {
    setSearch(newInputValue);
  };

  const handleStartDateChange = (date: MaterialUiPickersDate) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: MaterialUiPickersDate) => {
    setSelectedEndDate(date);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.searchContainer}>
        <Typography className={classes.heading} component="h1" variant="h4">
          Your Search Results
        </Typography>
        <Box className={classes.searchForm}>
          <SearchSitterForm
            selectedStartDate={selectedStartDate}
            handleStartDateChange={handleStartDateChange}
            selectedEndDate={selectedEndDate}
            handleEndDateChange={handleEndDateChange}
            search={search}
            handleChange={handleChange}
          ></SearchSitterForm>
        </Box>
        <Grid item className={classes.userList}>
          <SitterCard></SitterCard>
          <SitterCard></SitterCard>
          <SitterCard></SitterCard>
          <SitterCard></SitterCard>
          <SitterCard></SitterCard>
          <SitterCard></SitterCard>
        </Grid>
        <Button className={classes.outlineBtn}>Show More</Button>
      </Grid>
    </Grid>
  );
}
