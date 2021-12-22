import { useEffect, useState } from 'react';
import axios from 'axios';
// Material UI
import { Container } from '@mui/material';
// Project files
import ProductGrid from './ProductGrid';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productData = async () => {
      const result = await axios.get('https://fakestoreapi.com/products');

      console.log(result.data);

      setProducts(result.data);
      setIsLoading(false);
    };

    productData();
  }, []);

  return (
    <Container>
      <ProductGrid isLoading={isLoading} products={products}></ProductGrid>
    </Container>
  );
};

export default Products;
