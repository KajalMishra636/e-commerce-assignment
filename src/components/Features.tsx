import { Box, Container, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const features = [
  { icon: <LocalShippingIcon fontSize="large" color="primary" />, title: 'Free Shipping', desc: 'On orders over $100' },
  { icon: <VerifiedUserIcon fontSize="large" color="primary" />, title: 'Secure Payment', desc: '100% secure transactions' },
  { icon: <SupportAgentIcon fontSize="large" color="primary" />, title: '24/7 Support', desc: 'Dedicated tech assistance' },
];

export const Features = () => (
  <Box sx={{ py: 10, bgcolor: '#FFF5F5' }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {features.map((f, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i} textalign="center">
              {f.icon}
            <Stack aligntems="center" spacing={2}>
              <Typography variant="h6" fontWeight="bold">{f.title}</Typography>
              <Typography variant="body2" color="text.secondary">{f.desc}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);