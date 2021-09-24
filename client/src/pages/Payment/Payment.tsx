import React from 'react';
import PaymentForm from '../../components/Payment/PaymentForm';
import StripeForm from '../../components/Payment/StripeForm';
import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useStyles from './useStyles';
import { Modal, Box, Grid } from '@material-ui/core';
import { User, Profile } from '../../interface/User';
import MyProfileSideBanner from '../../components/MyProfileSideBanner/MyProfileSideBanner';
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY || '');
type locationState = {
  user: User;
  profile: Profile;
};

const Payment = (): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const { user, profile } = location.state as locationState;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container component="main" className={classes.root}>
      <Grid container>
        <Grid item className={classes.settingSideMenu}>
          <MyProfileSideBanner profile={profile as Profile} user={user as User} />
        </Grid>
        <Grid item className={classes.card}>
          <Box>
            <PaymentForm handleOpen={handleOpen} />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <Elements stripe={stripePromise}>
                <StripeForm onClose={handleClose} />
              </Elements>
            </Modal>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Payment;
