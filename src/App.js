import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Material UI
import { Toolbar } from '@mui/material';
// Components
import NavBar from './components/NavBar';
// Pages
import About from './pages/About';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
