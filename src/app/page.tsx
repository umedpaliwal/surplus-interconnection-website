'use client';

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import ApproachSection from '@/components/ApproachSection';

import Footer from '@/components/Footer';

// Create a theme instance with custom colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#1E88E5', // Bright blue
      light: '#6AB7FF',
      dark: '#005CB2',
    },
    secondary: {
      main: '#00C853', // Vibrant green
      light: '#5EFF82',
      dark: '#009624',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #1E88E5 30%, #42A5F5 90%)',
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #00C853 30%, #69F0AE 90%)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backdropFilter: 'blur(8px)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 40px rgba(0,0,0,0.05)',
          borderRadius: 16,
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 50px rgba(0,0,0,0.08)',
          },
        },
      },
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        bgcolor: 'background.default'
      }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <HeroSection />
          <ProblemSolutionSection />
          <ApproachSection />

        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
