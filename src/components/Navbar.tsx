import { AppBar, Toolbar, Typography, IconButton, Badge, Container, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart, setDrawerOpen } = useCart();

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #eee' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" color="primary" sx={{ flexGrow: 1, fontWeight: '900', letterSpacing: -1 }}>
            <Box component="span" sx={{ color: 'secondary.main' }}>  </Box>E COMM
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, mr: 4 }}>
            <Button color="inherit">New</Button>
            <Button color="inherit">Catalog</Button>
          </Box>
          <IconButton onClick={() => setDrawerOpen(true)}>
            <Badge badgeContent={cart.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;