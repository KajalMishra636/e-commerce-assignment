import React from 'react';
import { Box, Container, Typography, Stack, IconButton, TextField, Button, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 8, pb: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              E COMM
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
              Leading the way in premium tech and minimalist lifestyle accessories since 2024.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit"><FacebookIcon /></IconButton>
              <IconButton color="inherit"><TwitterIcon /></IconButton>
              <IconButton color="inherit"><InstagramIcon /></IconButton>
            </Stack>
          </Grid>
          
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Shop</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, cursor: 'pointer', '&:hover': { opacity: 1 } }}>All Products</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, cursor: 'pointer', '&:hover': { opacity: 1 } }}>Featured</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Newsletter</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>Get 10% off your first order.</Typography>
            <Stack direction="row" spacing={1}>
              <TextField 
                size="small" 
                placeholder="Email address" 
                sx={{ bgcolor: 'white', borderRadius: 1 }} 
              />
              <Button variant="contained" color="secondary">Join</Button>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
        <Typography variant="body2" align="center" sx={{ opacity: 0.5 }}>
          © 2026 E COMM. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;