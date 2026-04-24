import { ThemeProvider, CssBaseline, Container, Typography, Box, Grow } from '@mui/material';
import Grid from '@mui/material/Grid';
import { theme } from './theme/theme';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { Features } from './components/Features';
import Footer from './components/Footer';

const products = [
  { id: 1, name: 'Crimson Watch', price: 120, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
  { id: 2, name: 'Pro Headphones', price: 250, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
  { id: 3, name: 'Red Speaker', price: 89, image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500' },
  { id: 4, name: 'Studio Lens', price: 400, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500' },
];

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <CartDrawer />
        
        <Box component="main">
          <Hero />
          <Features />
          <Container maxWidth="lg" sx={{ py: 10 }}>
            <Typography variant="h4" textalign="center" mb={6}>Our Best Sellers</Typography>
            <Grid container spacing={4}>
              {products.map((p, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={p.id}>
                  {/* The staggered animation happens here */}
                  <Grow in={true} timeout={(index + 1) * 500}>
                    <Box><ProductCard {...p} /></Box>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Footer />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;