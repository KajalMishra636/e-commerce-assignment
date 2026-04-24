import { Box, Container, Typography, Button, Stack, Slide, Fade } from '@mui/material';
import Grid from '@mui/material/Grid';

const Hero = () => (
  <Box sx={{ bgcolor: 'primary.light', py: { xs: 8, md: 15 }, overflow: 'hidden' }}>
    <Container maxWidth="lg">
      <Grid container spacing={6} alignitems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Slide direction="right" in={true} timeout={800}>
            <Box>
              <Typography variant="overline" color="primary" fontWeight="bold">Summer Edition</Typography>
              <Typography variant="h2" gutterBottom>The Red Collection Is Here.</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Premium performance meets bold design. Get 20% off your first order.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large">Shop All</Button>
                <Button variant="outlined" size="large">Details</Button>
              </Stack>
            </Box>
          </Slide>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Fade in={true} timeout={2000}>
            <Box 
              component="img" 
              src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800" 
              sx={{ width: '100%', borderRadius: 8, boxShadow: '0 30px 60px rgba(211,47,47,0.2)' }}
            />
          </Fade>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Hero;