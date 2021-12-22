/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ProductCard from './ProductCard';

const ProductGrid = ({ products, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard product={product}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
