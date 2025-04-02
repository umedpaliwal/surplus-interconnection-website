'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import Image from 'next/image';

export default function ConceptSection() {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-section');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('is-visible');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box 
      id="concept" 
      ref={sectionRef}
      sx={{ 
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(135deg, #f5f9ff 0%, #e6f7ff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration - subtle grid pattern */}
      <Box 
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundImage: 'url(/assets/grid_pattern.png)',
          backgroundSize: '30%',
          backgroundRepeat: 'repeat',
          opacity: 0.04,
          zIndex: 0
        }}
      />

      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          className="fade-in-section"
          sx={{ 
            fontWeight: 700, 
            mb: 6, 
            textAlign: 'center',
            color: '#102A43'
          }}
        >
          Two Complementary Approaches
        </Typography>

        {/* Side by side concept cards */}
        <Grid container spacing={6}>
          {/* Thermal Plant Concept */}
          <Grid item xs={12} md={6} className="fade-in-section">
            <Paper 
              elevation={3}
              sx={{ 
                p: 4, 
                height: '100%',
                bgcolor: '#FFFFFF',
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(180, 77, 18, 0.2)',
                overflow: 'hidden'
              }}
            >
              <Typography 
                variant="h4"
                sx={{ 
                  fontWeight: 700, 
                  color: '#B44D12',
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '1.8rem' }
                }}
              >
                Thermal Plant Interconnections
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, color: '#000000', lineHeight: 1.7, fontSize: '1rem' }}>
                Utilize existing grid connections at thermal power plants to integrate new renewable energy generation, bypassing interconnection queues.
              </Typography>
              
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                <Image 
                  src="/assets/thermal/idea.png" 
                  alt="Thermal Plant Concept" 
                  width={400} 
                  height={240}
                  style={{ 
                    objectFit: 'contain',
                    maxWidth: '100%'
                  }}
                  priority
                />
              </Box>
            </Paper>
          </Grid>
          
          {/* Renewable Plant Concept */}
          <Grid item xs={12} md={6} className="fade-in-section">
            <Paper 
              elevation={3}
              sx={{ 
                p: 4, 
                height: '100%',
                bgcolor: '#FFFFFF',
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(0, 86, 162, 0.2)',
                overflow: 'hidden'
              }}
            >
              <Typography 
                variant="h4"
                sx={{ 
                  fontWeight: 700, 
                  color: '#0056A2',
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '1.8rem' }
                }}
              >
                Renewable Plant Enhancement
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, color: '#000000', lineHeight: 1.7, fontSize: '1rem' }}>
                Maximize existing renewable plant interconnections by adding complementary technologies like energy storage and additional generation.
              </Typography>
              
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                <Image 
                  src="/assets/re/idea_re.png" 
                  alt="Renewable Plant Enhancement" 
                  width={400} 
                  height={240}
                  style={{ 
                    objectFit: 'contain',
                    maxWidth: '100%'
                  }}
                  priority
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}
