'use client';

import React, { useRef, useEffect } from 'react';
import { Box, Typography, Container, Grid, Button, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video slightly
      videoRef.current.play().catch(error => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <Box 
      sx={{
        position: 'relative',
        minHeight: '120vh', /* Increased height */
        overflow: 'hidden',
        backgroundColor: '#001220'
      }}
    >
      {/* Video background */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4,
            filter: 'brightness(0.7)'
          }}
        >
          <source src="/assets/re/video_re_dashboard.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* Content overlay */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 20, pb: 12 }}>
        <Grid container>
          {/* Hero Text and CTA */}
          <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ maxWidth: { xs: '100%', md: '90%' }, margin: { xs: 'auto', md: '0' } }}>
              <Typography 
                variant="h1"
                sx={{ 
                  fontSize: { xs: '2.8rem', sm: '3.8rem', md: '4.5rem', lg: '5rem' },
                  fontWeight: 800,
                  color: '#fff',
                  mb: 3,
                  letterSpacing: '-0.5px',
                  lineHeight: 1,
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  '& > span': {
                    display: 'block',
                    mb: 1
                  }
                }}
              >
                <span>Scarcity</span>
                <span>to</span>
                <span>Surplus</span>
              </Typography>
            </Box>

            <Box sx={{ maxWidth: { xs: '100%', md: '90%' }, margin: { xs: 'auto', md: '0' } }}>
              <Typography
                variant="h2"
                sx={{ 
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.2rem' },
                  fontWeight: 500,
                  color: '#D1F0FF',
                  mb: 5,
                  letterSpacing: '-0.5px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  lineHeight: 1.4
                }}
              >
                Leveraging Existing Infrastructure for Renewable Energy Growth
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Button 
                variant="contained" 
                size="large"
                href="https://scarcitytosurplus.com/dashboard"
                target="_blank"
                endIcon={<LaunchIcon />}
                sx={{
                  mt: 2,
                  mb: 10,
                  py: 2,
                  px: 7,
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  backgroundColor: '#0090EA',
                  '&:hover': {
                    backgroundColor: '#0078C8'
                  },
                  boxShadow: '0 4px 14px rgba(0, 144, 234, 0.4)',
                  display: 'inline-block'
                }}
              >
                Dashboard
              </Button>
            </Box>
          </Grid>
        </Grid>
        
        {/* Scroll indicator */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 4,
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
            '40%': { transform: 'translateY(-20px)' },
            '60%': { transform: 'translateY(-10px)' }
          }
        }}>
          <KeyboardArrowDownIcon sx={{ fontSize: '3rem', color: 'white', opacity: 0.8 }} />
        </Box>
      </Container>
    </Box>
  );
}
