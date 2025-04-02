'use client';

import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function ThermalProject() {
  return (
    <Box 
      id="thermal-project"
      sx={{ 
        py: 10,
        backgroundColor: '#f8f9fa',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography 
          variant="h2" 
          component="h2" 
          align="center"
          sx={{ 
            mb: 6, 
            fontWeight: 700, 
            color: '#00838F',
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #00838F, #4ECDC4)',
              borderRadius: '4px',
            }
          }}
        >
          Integrate Renewables at Existing Thermal Plants
        </Typography>

        {/* Concept Section */}
        <Box sx={{ mb: 10 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid xs={12} md={6}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#00838F' }}>
                The Concept
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Existing thermal power plants have established grid connections that sit unused for significant periods of time, especially as the electricity system transitions to cleaner sources.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Our solution leverages these connections by co-locating new solar and wind generation at existing fossil power plants, bypassing lengthy interconnection queues while making use of current infrastructure.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7, fontWeight: 500 }}>
                This approach accelerates the deployment of cheaper electricity while maximizing the utilization of existing grid assets.
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '300px', sm: '400px' },
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Image
                  src="/assets/thermal/idea.png"
                  alt="Thermal Plant Interconnection Concept"
                  fill
                  style={{ 
                    objectFit: 'contain',
                    padding: '20px'
                  }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Key Findings Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: '#00838F', textAlign: 'center' }}>
            Key Findings
          </Typography>
          
          <Grid container spacing={3}>
            {[
              {
                title: "Substantial RE Potential",
                content: "Over 15,400 GW of technically feasible renewable energy potential exists within just a 6x6-mile buffer zone around existing fossil power plants in the U.S."
              },
              {
                title: "Economic Viability",
                content: "For over 75% of existing fossil interconnection capacity, the LCOE for local solar is now lower than the plants' variable costs."
              },
              {
                title: "Integration Potential",
                content: "Approximately 1,000 GW of solar and wind capacity could be economically integrated into existing fossil POIs by 2030."
              },
              {
                title: "Alignment with Least-Cost System",
                content: "Leveraging existing interconnection could help deliver the majority of RE needs for a least-cost power system in 38 states by 2030."
              },
              {
                title: "Immediate Opportunities",
                content: "Over 200 GW of U.S. fossil capacity currently operates at less than 15% capacity and faces operating costs approximately $20/MWh higher than intermediate and baseload fossil capacity."
              }
            ].map((item, index) => (
              <Grid xs={12} md={6} lg={4} key={index}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3, 
                    height: '100%', 
                    borderRadius: '12px',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0, 131, 143, 0.15)',
                      borderColor: '#4ECDC4'
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#00838F' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#424242' }}>
                    {item.content}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Video Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: '#00838F', textAlign: 'center' }}>
            Project Visualization
          </Typography>
          
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%', // 16:9 aspect ratio
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              margin: '0 auto',
              maxWidth: '800px'
            }}
          >
            <Box 
              component="video"
              controls
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source src="/assets/thermal/Video_Surplus_Interconnection.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>
          </Box>
        </Box>

        {/* Resources Section */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#00838F' }}>
            Explore More Resources
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Button 
              variant="contained"
              href="https://scarcitytosurplus.com/dashboard" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                borderRadius: '8px',
                backgroundColor: '#00838F',
                '&:hover': {
                  backgroundColor: '#006064',
                },
                textTransform: 'none',
                fontSize: '1rem',
                px: 3
              }}
            >
              Interactive Dashboard
            </Button>
            <Button 
              variant="outlined"
              href="https://gspp.berkeley.edu/assets/uploads/page/Surplus_Interconnection.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                borderRadius: '8px',
                borderColor: '#00838F',
                color: '#00838F',
                '&:hover': {
                  borderColor: '#006064',
                  backgroundColor: 'rgba(0, 131, 143, 0.04)',
                },
                textTransform: 'none',
                fontSize: '1rem',
                px: 3
              }}
            >
              Technical Report
            </Button>
            <Button 
              variant="outlined"
              href="https://gridlab.org/surplus-interconnection-policy-explainer/" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                borderRadius: '8px',
                borderColor: '#00838F',
                color: '#00838F',
                '&:hover': {
                  borderColor: '#006064',
                  backgroundColor: 'rgba(0, 131, 143, 0.04)',
                },
                textTransform: 'none',
                fontSize: '1rem',
                px: 3
              }}
            >
              Policy Explainer
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
