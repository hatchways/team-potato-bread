import React from 'react';
import PaymentForm from '../../components/Payment/PaymentForm';
import StripeForm from '../../components/Payment/StripeForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Modal, Box } from '@material-ui/core';
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY || '');

const Payment = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
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
  );
};

export default Payment;

