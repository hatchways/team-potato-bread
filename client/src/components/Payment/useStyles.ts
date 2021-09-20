import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paymentTitle: {
    textAlign: 'center',
    padding: '50px 0px 60px 0px',
  },
  paymentText: {
    color: 'gray',
  },
  cardBox: {
    border: '1px solid #d1d1d1',
    borderRadius: '5px',
    padding: '3%',
  },
  cardLogo: {
    width: 120,
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '20px',
  },
  root: {
    transform: 'scale(2)',
    '&:hover': {
      backgroundColor: 'transparent!important',
    },
  },
  cardNo: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  cardExp: {
    color: 'gray',
  },
  cardHoldName: {
    fontWeight: 'bold',
    paddingTop: 20,
    fontSize: '1.2rem',
  },
  containerStyle: {
    padding: '20px 50px',
    marginTop: '100px',
  },
  btnBox: {
    padding: '5% 0px',
  },
  AddNewPayment: {
    padding: '20px 30px',
  },
  modalTitle: {
    padding: '10px',
  },
  stripeFormBox: {
    background: 'white',
    padding: '20px 50px',
    borderRadius: '5px',
    maxWidth: '500px',
    marginTop: '200px',
    position: 'relative',
  },
  modalCloseIcon: {
    position: 'absolute',
    top: 5,
    right: 6,
  },
  modalBtnBox: {
    padding: '40px 0px 30px 0px',
    textAlign: 'right',
  },
  modalBtn: {
    padding: '10px 30px',
  },
  cardElements: {
    border: '1px solid #90909047',
    padding: 10,
    borderRadius: 5,
    '&:hover': {
      boxShadow: '0px 2px 12px #90909047',
    },
  },
}));

export default useStyles;
