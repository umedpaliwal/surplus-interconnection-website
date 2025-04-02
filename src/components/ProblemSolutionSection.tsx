'use client';

import React, { useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme, Divider, Card, CardContent, Stack } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import BoltIcon from '@mui/icons-material/Bolt';
import SpeedIcon from '@mui/icons-material/Speed';
import MemoryIcon from '@mui/icons-material/Memory';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import SavingsIcon from '@mui/icons-material/Savings';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import PolicyIcon from '@mui/icons-material/Policy';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

export default function ProblemSolutionSection() {
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
      id="problem-solution" 
      ref={sectionRef}
      sx={{ 
        py: { xs: 10, md: 12 },
        background: 'linear-gradient(135deg, #011B29 0%, #01304D 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: 'white'
      }}
    >
      {/* Background decoration */}
      <Box 
        sx={{
          position: 'absolute',
          top: '15%',
          right: '-5%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58,134,255,0.12) 0%, rgba(58,134,255,0) 70%)',
          zIndex: 0
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(33,158,188,0.12) 0%, rgba(33,158,188,0) 70%)',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            className="fade-in-section"
            sx={{ 
              fontWeight: 700, 
              mb: 6,
              color: 'white',
              textShadow: '0 0 20px rgba(0,195,255,0.2)',
              maxWidth: '900px', 
              mx: 'auto',
              fontSize: '1.75rem'
            }}
          >
            The U.S. race to power AI innovation and kickstart domestic manufacturing faces a critical roadblock
          </Typography>
        </Box>
        
        {/* PROBLEM AND SOLUTION SECTION - SIDE BY SIDE */}
        <Grid container spacing={4} sx={{ display: 'flex', alignItems: 'stretch' }}>
          {/* LEFT SIDE: THE PROBLEM */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h3" 
              className="fade-in-section"
              sx={{ 
                fontWeight: 700, 
                mb: 3, 
                fontSize: '1.75rem',
                position: 'relative',
                color: 'white',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: -12,
                  width: 50,
                  height: 3,
                  borderRadius: 2,
                  background: 'linear-gradient(90deg, #3a86ff 0%, #219ebc 100%)'
                }
              }}
            >
              The Problem
            </Typography>

            <Card 
              className="fade-in-section"
              sx={{
                bgcolor: 'rgba(0,20,40,0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(72,202,228,0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                mt: 4, height: '100%'
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ mb: 3 }}>
                  <Stack direction="row" spacing={1.5} sx={{ mb: 2, alignItems: 'center' }}>
                    <BoltIcon sx={{ fontSize: 28, color: '#48cae4' }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.2rem', color: 'white' }}>
                      Unprecedented Load Growth
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ fontSize: '0.9rem', mb: 2, lineHeight: 1.5, color: 'white', fontWeight: 400 }}>
                    A <strong style={{color: '#48cae4'}}>fivefold increase</strong> in electricity demand forecasts over just two years, with projections reaching <strong style={{color: '#48cae4'}}>128 GW by 2029</strong> — far outpacing planned capacity additions.
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#48cae4', fontSize: '0.85rem', bgcolor: 'rgba(0,50,80,0.5)', py: 0.5, px: 1.5, borderRadius: 1.5, border: '1px solid rgba(72,202,228,0.2)' }}>
                      <MemoryIcon sx={{fontSize: '0.9rem'}} />
                      Data Centers & AI: 65-90+ GW
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#48cae4', fontSize: '0.85rem', bgcolor: 'rgba(0,50,80,0.5)', py: 0.5, px: 1.5, borderRadius: 1.5, border: '1px solid rgba(72,202,228,0.2)' }}>
                      <SettingsEthernetIcon sx={{fontSize: '0.9rem'}} />
                      Manufacturing: 20+ GW
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#48cae4', fontSize: '0.85rem', bgcolor: 'rgba(0,50,80,0.5)', py: 0.5, px: 1.5, borderRadius: 1.5, border: '1px solid rgba(72,202,228,0.2)' }}>
                      <EnergySavingsLeafIcon sx={{fontSize: '0.9rem'}} />
                      Electrification: ~20 GW
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 3, borderColor: 'rgba(72,202,228,0.2)' }} />

                <Box>
                  <Stack direction="row" spacing={1.5} sx={{ mb: 2, alignItems: 'center' }}>
                    <WarningAmberIcon sx={{ fontSize: 28, color: '#48cae4' }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.2rem', color: 'white' }}>
                      Critical Supply Gap
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ fontSize: '0.9rem', mb: 2, lineHeight: 1.5, color: 'white', fontWeight: 400 }}>
                    Planned capacity additions will <strong style={{color: '#48cae4'}}>not be sufficient</strong> to meet projected load growth, threatening power supply reliability and triggering price spikes in capacity markets. A supply gap of up to <strong style={{color: '#48cae4'}}>50 GW</strong> could emerge even if all planned gas and storage projects come online as expected.
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#48cae4', fontSize: '0.85rem', bgcolor: 'rgba(0,50,80,0.5)', py: 0.5, px: 1.5, borderRadius: 1.5, border: '1px solid rgba(72,202,228,0.2)' }}>
                      <QueryBuilderIcon sx={{fontSize: '0.9rem'}} />
                      5-8+ year timelines
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#48cae4', fontSize: '0.85rem', bgcolor: 'rgba(0,50,80,0.5)', py: 0.5, px: 1.5, borderRadius: 1.5, border: '1px solid rgba(72,202,228,0.2)' }}>
                      <SpeedIcon sx={{fontSize: '0.9rem'}} />
                      2,584 GW in queues
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#48cae4', fontSize: '0.85rem', bgcolor: 'rgba(0,50,80,0.5)', py: 0.5, px: 1.5, borderRadius: 1.5, border: '1px solid rgba(72,202,228,0.2)' }}>
                      <SavingsIcon sx={{fontSize: '0.9rem'}} />
                      Soaring capacity costs
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* RIGHT SIDE: THE SOLUTION */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h3" 
              className="fade-in-section"
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: '1.75rem',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: -12,
                  width: 50,
                  height: 3,
                  borderRadius: 2,
                  background: 'linear-gradient(90deg, #8ecae6 0%, #219ebc 100%)'
                }
              }}
            >
              The Solution: Surplus Interconnection
            </Typography>

            <Card 
              className="fade-in-section"
              sx={{
                bgcolor: 'rgba(0,40,80,0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(142,202,230,0.3)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                mt: 4, height: '100%'
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#8ecae6', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                    <PolicyIcon sx={{ mr: 1.5, fontSize: '1.2rem' }} />
                    What is Surplus Interconnection?
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '0.9rem', mb: 0, lineHeight: 1.5, color: 'white', fontWeight: 400 }}>
                    Surplus Interconnection is a strategy that leverages existing grid connections that are underutilized, allowing new clean energy resources to connect at these points without waiting for new transmission infrastructure. <strong style={{color: '#8ecae6'}}>FERC Order 845 (2018)</strong> allows surplus interconnection, enabling faster renewable energy deployment.
                  </Typography>
                </Box>

                <Divider sx={{ my: 3, borderColor: 'rgba(142,202,230,0.2)' }} />
                
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#8ecae6', fontSize: '1.2rem' }}>
                    Key Results
                  </Typography>

                  <Box sx={{ mb: 2.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: '#8ecae6', fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}>
                      <SpeedIcon sx={{ fontSize: '1rem', mr: 1 }} />
                      Massive Clean Energy Capacity
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '0.9rem', lineHeight: 1.5, color: 'white', ml: 2, fontWeight: 400 }}>
                      Combined potential to integrate <strong style={{color: '#8ecae6'}}>1,339 GW</strong> of clean energy (<strong style={{color: '#8ecae6'}}>977 GW</strong> via thermal plants + <strong style={{color: '#8ecae6'}}>362 GW</strong> via RE sites), nearly doubling U.S. generation capacity.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: '#8ecae6', fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}>
                      <SavingsIcon sx={{ fontSize: '1rem', mr: 1 }} />
                      Firm Capacity & Cost Savings
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '0.9rem', lineHeight: 1.5, color: 'white', ml: 2, fontWeight: 400 }}>
                      Adds <strong style={{color: '#8ecae6'}}>256 GW</strong> of firm battery capacity while delivering up to <strong style={{color: '#8ecae6'}}>61% cost savings</strong> compared to new gas plants. Saves approximately <strong style={{color: '#8ecae6'}}>$89 billion</strong> in avoided grid upgrade costs by reusing existing interconnection infrastructure.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
