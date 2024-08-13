import Header from './components/header/Header.jsx';
import Body from './components/body/Body.jsx';
import './App.css';
import Footer from './components/Footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#66837e',
      },
      secondary: {
        main: '#ff4081',
      },
    },
  });

  return (
    <div className="app" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <ThemeProvider theme={theme}>
        <Header />
        <Body />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
