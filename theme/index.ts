import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#ffc400',
    },
  },
  typography: {
    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 20,
    },
    h4: {
      fontSize: 18,
    },
    fontSize: 16,
  },
});
