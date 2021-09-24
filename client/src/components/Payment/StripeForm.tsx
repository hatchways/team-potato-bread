import React, { useMemo, useState } from 'react';
import { Button, Box, Grid, IconButton, Typography, TextField, Divider } from '@material-ui/core';
import { Formik } from 'formik';
import CloseIcon from '@material-ui/icons/Close';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useAuth } from '../../context/useAuthContext';
import addNewCard from '../../helpers/APICalls/addNewCard';
import useStyles from './useStyles';
import { useSnackBar } from '../../context/useSnackbarContext';
interface Props {
  onClose: () => void;
}
interface BillingDetails {
  email: string;
  name: string;
}

const StripeForm = ({ onClose }: Props): JSX.Element => {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const { addPayment } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    email: '',
    name: '',
  });

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

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails,
    });
    if (error) console.log('error', error);
    if (paymentMethod) {
      const payment = {
        stripeId: paymentMethod.id,
        name: paymentMethod.billing_details?.name,
        email: paymentMethod.billing_details?.email,
        expMonth: paymentMethod.card?.exp_month,
        expYear: paymentMethod.card?.exp_year,
        last4: paymentMethod.card?.last4,
        brand: paymentMethod.card?.brand,
      };
      addNewCard(payment).then((data) => {
        if (data.error) {
          updateSnackBarMessage(data.error.message);
        } else if (data.success) {
          addPayment(data.success);
          updateSnackBarMessage('The payment card added!');
          onClose();
        } else {
          updateSnackBarMessage('An unexpected error occurred. Please try again');
        }
      });
    }
  };
  return (
    <Box>
      <Grid container justify="space-around">
        <Grid item xs={6} className={classes.stripeFormBox}>
          <Typography variant="h3" className={classes.modalTitle}>
            Add Card
          </Typography>
          <Divider className={classes.formDivider} />
          <IconButton className={classes.modalCloseIcon} onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Formik initialValues={{}} onSubmit={handleSubmit}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  id="name"
                  name="name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  placeholder="name"
                  className={classes.formInput}
                  value={billingDetails.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setBillingDetails({ ...billingDetails, name: e.target.value })
                  }
                />
                <TextField
                  id="email"
                  name="email"
                  type="text"
                  fullWidth
                  className={classes.formInput}
                  variant="outlined"
                  placeholder="email"
                  value={billingDetails.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setBillingDetails({ ...billingDetails, email: e.target.value })
                  }
                />
                <CardElement options={options} className={classes.cardElements} />

                <Box className={classes.modalBtnBox}>
                  <Button
                    className={classes.modalBtn}
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={!stripe}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StripeForm;
