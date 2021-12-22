/* eslint-disable react/prop-types */
// Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.title}
        height="160"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Details</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
