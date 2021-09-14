import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1rem',
    marginBottom: '1rem',
    '& .MuiTypography-body2': {
      fontSize: '0.85rem',
    },
  },
  header: {
    paddingBottom: '5px',
    fontWeight: 700,
  },
  content: {
    paddingTop: '5px',
  },
}));

export default useStyles;
