import { theme } from '../../theme/index';
import { ThemeProvider } from '@material-ui/core/styles';
import '../../style/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
