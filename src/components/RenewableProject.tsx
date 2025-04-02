'use client';

import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function RenewableProject() {
  return (
    <Box 
      id="renewable-project"
      sx={{ 
        py: 10,
        backgroundColor: '#ffffff',
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
            color: '#1565C0',
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #1565C0, #64B5F6)',
              borderRadius: '4px',
            }
          }}
        >
          Pair Storage with Existing Renewables
        </Typography>

        {/* Concept Section */}
        <Box sx={{ mb: 10 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '300px', sm: '400px' },
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  backgroundColor: '#f5f9ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h5" sx={{ color: '#1565C0', textAlign: 'center', p: 4 }}>
                  Boosting firm power supply by adding battery storage to underutilized renewable grid infrastructure
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#1565C0' }}>
                The Concept
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Existing renewable energy plants significantly underutilize their grid interconnection capacity, with solar operating at only 29.9% and wind at 46.9% of interconnection capacity on average.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Our solution deploys battery storage at these sites, leveraging FERC Order 845 to rapidly add firm power while bypassing interconnection bottlenecks and lengthy approval processes.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7, fontWeight: 500 }}>
                This approach improves resiliency, meets peak demand, and creates a firm, reliable clean energy supply to address growing electricity needs.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Key Findings Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: '#1565C0', textAlign: 'center' }}>
            Key Findings
          </Typography>
          
          <Grid container spacing={3}>
            {[
              {
                title: "Massive Firm Capacity Potential",
                content: "Adding storage to over 2,000 U.S. renewable energy plants could boost peak supply by 250 GW and enable integration of 350 GW of additional renewables."
              },
              {
                title: "Cost-Effective Solution",
                content: "This approach offers up to 50% cost savings compared to alternatives, with firm capacity costs at about $1,200/kW compared to $2,300/kW for conventional options."
              },
              {
                title: "Improved Asset Utilization",
                content: "Storage dramatically improves interconnection utilization factors, potentially increasing solar from 29.9% to 70.8% and wind from 46.9% to 83.0%."
              },
              {
                title: "Rapid Deployment Capability",
                content: "Much faster deployment timeline (1-2 years) compared to new gas plants or greenfield renewables (5+ years), allowing a modular 'build-as-needed' approach."
              },
              {
                title: "Meeting Critical Demand Growth",
                content: "The potential storage capacity at existing sites can meet or exceed projected peak demand growth in most regions by 2030."
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
                      boxShadow: '0 10px 30px rgba(21, 101, 192, 0.15)',
                      borderColor: '#64B5F6'
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1565C0' }}>
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
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: '#1565C0', textAlign: 'center' }}>
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
              <source src="/assets/re/video_re_dashboard.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>
          </Box>
        </Box>

        {/* Resources Section */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#1565C0' }}>
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
                backgroundColor: '#1565C0',
                '&:hover': {
                  backgroundColor: '#0D47A1',
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
                borderColor: '#1565C0',
                color: '#1565C0',
                '&:hover': {
                  borderColor: '#0D47A1',
                  backgroundColor: 'rgba(21, 101, 192, 0.04)',
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
                borderColor: '#1565C0',
                color: '#1565C0',
                '&:hover': {
                  borderColor: '#0D47A1',
                  backgroundColor: 'rgba(21, 101, 192, 0.04)',
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
