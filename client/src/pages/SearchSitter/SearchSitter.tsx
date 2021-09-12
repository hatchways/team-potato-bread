import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import SearchSitterForm from '../../components/SearchSitterForm/SearchSitterForm';
import SitterCard from '../../components/SitterCard/SitterCard';
import { Button } from '@material-ui/core';
import { useState, ChangeEvent } from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const [search, setSearch] = useState<string>('test');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleChange = (e: ChangeEvent<HTMLInputElement>, newInputValue: string) => {
    setSearch(newInputValue);
  };

  const handleDateChange = (date: MaterialUiPickersDate) => {
    // console.log(date);
    // setSelectedDate(date?.getDate());
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Box className={classes.authWrapper}>
        <AuthHeader asideText="Become a sitter" />
      </Box>
      <Grid container className={classes.searchContainer}>
        <Typography className={classes.heading} component="h1" variant="h4">
          Your Search Results
        </Typography>
        <Box className={classes.searchForm}>
          <SearchSitterForm
            date={selectedDate}
            handleDateChange={handleDateChange}
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
