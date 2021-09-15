import React, { useMemo } from 'react';
import { Button, Box, Grid, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useStyles from './useStyles';
interface Props {
  onClose: () => void;
}
const StripeForm = ({ onClose }: Props): JSX.Element => {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();

  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '1.2rem',
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }),
    [],
  );

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) console.log('error', error);
    if (paymentMethod) console.log('paymentMethod', paymentMethod);
  };
  return (
    <Box>
      <Grid container justify="space-around">
        <Grid item xs={6} className={classes.stripeFormBox}>
          <h1 className={classes.modalTitle}>Add Card</h1>
          <IconButton className={classes.modalCloseIcon} onClick={onClose}>
            <CloseIcon />
          </IconButton>

          <form onSubmit={handleSubmit}>
            <CardElement options={options} className={classes.cardElements} />
            <Box className={classes.modalBtnBox}>
              <Button className={classes.modalBtn} variant="contained" color="primary" type="submit" disabled={!stripe}>
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StripeForm;
