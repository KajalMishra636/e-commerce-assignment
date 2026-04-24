import { Card, CardMedia, CardContent, Typography, Button, CardActions, Box } from '@mui/material';
import { useCart, type Product } from '../context/CartContext';
import { formatPrice } from '../utlis/constants';

const ProductCard = (product: Product) => {
  const { addToCart } = useCart();

  return (
    <Card sx={{ 
      height: '100%', 
      transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      '&:hover': { transform: 'translateY(-10px)', boxShadow: 6 }
    }}>
      <Box sx={{ overflow: 'hidden' }}>
        <CardMedia 
          component="img" 
          height="280" 
          image={product.image} 
          sx={{ transition: '0.4s', '&:hover': { transform: 'scale(1.1)' } }} 
        />
      </Box>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="primary" fontWeight="bold">{formatPrice(product.price) }</Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button variant="contained" fullWidth onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;