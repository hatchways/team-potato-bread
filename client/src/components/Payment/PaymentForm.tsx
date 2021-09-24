import React, { useState } from 'react';
import { Grid, Box, Card, Container, Checkbox, Button, Typography } from '@material-ui/core';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import cardLogo from '../../Images/Mastercard_logo.jpg';
interface Props {
  handleOpen: () => void;
}
const PaymentForm = ({ handleOpen }: Props): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState(true);
  const renderCards = () => {
    if (!loggedInUser?.payment) return;
    return loggedInUser?.payment.map((p, i) => {
      return (
        <Grid key={i.toString()} className={classes.cardBox} item xs={6}>
          <Box className={classes.flexBox}>
            <img className={classes.cardLogo} src={cardLogo} />
            <Checkbox
              icon={<CircleUnchecked />}
              checkedIcon={<CircleCheckedFilled />}
              disableRipple={true}
              classes={{ root: classes.root }}
              onChange={() => setPaymentMethod(!paymentMethod)}
              checked={paymentMethod}
              name="defaultCard"
            />
          </Box>
          <Box className={classes.cardNo}>**** **** **** {p.last4 || ''}</Box>
          <Box className={classes.cardExp}>
            Exp Date:{p?.expMonth}/{p?.expYear}
          </Box>
          <Box className={classes.cardHoldName}>{p?.name}</Box>
        </Grid>
      );
    });
  };
  return (
    <Container>
      <Card className={classes.containerStyle}>
        <Box>
          <Typography variant="h2" className={classes.paymentTitle}>
            Payment Methods
          </Typography>
          <Typography variant="body1" className={classes.paymentText}>
            Saved Payment Profiles:
          </Typography>
          <Grid container>{renderCards()}</Grid>
        </Box>
        <Box className={classes.btnBox}>
          <Button className={classes.AddNewPayment} onClick={handleOpen} variant="outlined" color="primary">
            Add New Payment Profile
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default PaymentForm;
