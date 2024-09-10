import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './component/Home/Home';
import ResturantDetails from './component/Resturant/ResturantDetails';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/* <Home/> */}
      <ResturantDetails/>
    </ThemeProvider>
  );
}

export default App;
