'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CallToActionSection() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #001029 0%, #00264D 100%)',
        color: '#fff',
      }}
    >
      {/* Animated background gradient */}
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(30, 136, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 200, 83, 0.15) 0%, transparent 50%)',
        zIndex: 0,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box className="fade-in-section">
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }} className="text-gradient-blue">
                Ready to Transform Grid Infrastructure?
              </Typography>
              
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}>
                Explore our interactive dashboard to dive deeper into the data behind surplus interconnection opportunities across the United States.
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 5 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="https://surplusint-git-dev-energy-ai.vercel.app/re/dashboard"
                  target="_blank"
                  endIcon={<LaunchIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: 'linear-gradient(45deg, #1E88E5 0%, #42A5F5 100%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976D2 0%, #1E88E5 100%)',
                    }
                  }}
                >
                  Explore Dashboard
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  href="mailto:info@scarcitytosurplus.com"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.5)',
                    '&:hover': {
                      borderColor: '#fff',
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Box 
              className="fade-in-section floating-card"
              sx={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                p: 4,
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                height: '100%',
              }}
            >
              <Typography variant="h6" sx={{ mb: 4, color: 'primary.light', fontWeight: 600 }}>
                Impact by the Numbers
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#fff' }}>
                  15,400 GW
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, opacity: 0.8 }}>
                  potential renewable capacity using surplus interconnection
                </Typography>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#fff' }}>
                  1,000 GW
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, opacity: 0.8 }}>
                  could be deployed by 2030 with right policies
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#fff' }}>
                  50%
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, opacity: 0.8 }}>
                  cost savings compared to traditional interconnection
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
