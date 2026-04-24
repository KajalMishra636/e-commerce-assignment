import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#D32F2F', 
      dark: '#B71C1C',
      light: '#FFEBEE',
    },
    secondary: {
      main: '#1A1A1A',
    },
    background: {
      default: '#FFFBFA', // The subtle red tint
    },
  },
  typography: {
    fontFamily: '"Inter", "sans-serif"',
    h2: { fontWeight: 800 },
    h4: { fontWeight: 700 },
  },
  shape: { borderRadius: 16 },
});

// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#D32F2F', // High-end Crimson Red
//       dark: '#B71C1C',
//       contrastText: '#fff',
//     },
//     secondary: {
//       main: '#1A1A1A', // Deep Charcoal
//     },
//     background: {
//       default: '#FFFBFA', // Very subtle red tint in the background
//     },
//   },
//   shape: {
//     borderRadius: 8,
//   },
// });

// export default theme;

// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1a1a1a', // Sleek black/dark grey
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       default: '#ffffff',
//     },
//   },
//   typography: {
//     fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
//     h2: {
//       fontSize: '2.5rem',
//       '@media (min-width:600px)': {
//         fontSize: '3.5rem',
//       },
//     },
//   },
// });

// export default theme;