// Material UI
import { Toolbar } from '@mui/material';
// Project files
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Home = () => {
  return (
    <>
      <Navbar />
      <Toolbar />
      <Toolbar />
      <Products />
      <Toolbar />
    </>
  );
};

export default Home;
