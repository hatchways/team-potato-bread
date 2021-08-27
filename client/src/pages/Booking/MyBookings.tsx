/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
// import CssBaseline from '@material-ui/core/CssBaseline';
import MgnBookingHeader from '../../components/MgnBookingHeader/MgnBookingHeader';
import BookingCalendar from '../../components/BookingCalendar/BookingCalendar';
import useStyles from './useStyles';

export default function MyBookings(): JSX.Element {
  return (
    <Grid container component="main">
      <MgnBookingHeader />
      <BookingCalendar />
    </Grid>
  );
}
