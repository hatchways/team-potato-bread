import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    h3: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 15,
    },
    subtitle1: {
      color: 'gray',
      fontSize: 12,
    },
    subtitle2: {
      fontWeight: 'bold',
      fontSize: 12,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  palette: {
    primary: { main: '#cc3527' },
  },
  shape: {
    borderRadius: 5,
  },
});
