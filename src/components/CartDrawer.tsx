import { Drawer, Box, Typography, List, ListItem, IconButton, Button, Divider, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utlis/constants';

export const CartDrawer = () => {
  const { cart, isDrawerOpen, setDrawerOpen, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
      <Box sx={{ width: { xs: '100vw', sm: 400 }, p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight="bold">Cart ({cart.length})</Typography>
          <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
        </Stack>
        <Divider />
        <List sx={{ flexGrow: 1, mt: 2 }}>
          {cart.map((item, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid #f0f0f0' }} secondaryAction={
              <IconButton onClick={() => removeFromCart(item.id)}><DeleteIcon /></IconButton>
            }>
              <Box component="img" src={item.image} sx={{ width: 50, height: 50, borderRadius: 1, mr: 2 }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">{item.name}</Typography>
                <Typography variant="body2" color="primary">${item.price}</Typography>
              </Box>
            </ListItem>
          ))}
        </List>
        <Box sx={{ pt: 3 }}>
          <Typography variant="h6" textAlign="right">Total: {formatPrice(total)}</Typography>
          <Button variant="contained" fullWidth size="large" sx={{ mt: 2, py: 2 }}>Proceed to Checkout</Button>
        </Box>
      </Box>
    </Drawer>
  );
};