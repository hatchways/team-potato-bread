import React, { useState } from 'react';
import { Grid, Box, Card, Container, Checkbox, Button } from '@material-ui/core';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import useStyles from './useStyles';
import cardLogo from '../../Images/Mastercard_logo.jpg';
interface Props {
  handleOpen: () => void;
}
const PaymentForm = ({ handleOpen }: Props): JSX.Element => {
  const classes = useStyles();
  const [paymentMethod, setPaymentMethod] = useState(true);
  return (
    <Container>
      <Card className={classes.containerStyle}>
        <Box>
          <h1 className={classes.paymentTitle}>Payment Methods</h1>
          <p className={classes.paymentText}>Saved Payment Profiles:</p>
          <Grid container>
            <Grid className={classes.cardBox} item xs={6}>
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
              <Box className={classes.cardNo}>**** **** **** 4242</Box>
              <Box className={classes.cardExp}>Exp Date:02/23</Box>
              <Box className={classes.cardHoldName}>Jone Doe</Box>
            </Grid>
          </Grid>
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
