'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button,
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Stack
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function ApproachSection() {
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

  // Thermal approach benefits
  const thermalBenefits = [
    {
      title: "Abundant Local Resources",
      subtitle: "15,400 GW",
      description: "Over 15,400 GW of renewable energy can be built within just 6 miles of existing fossil fuel plants. Most plants (90%) have enough nearby land to build 5 times their current capacity in renewables."
    },
    {
      title: "Cost-Effective Today",
      subtitle: "75% Viable",
      description: "At 75% of existing fossil plants (700 GW), building new solar is already cheaper than running the existing plant. For wind, this is true at 80% of plants. By 2030, this will be true almost everywhere."
    },
    {
      title: "Ready for Renewables",
      subtitle: "977 GW by 2030",
      description: "977 GW of solar and wind can be added to existing grid connections by 2030 - nearly doubling US electricity generation capacity."
    },
    {
      title: "Nationwide Solution",
      subtitle: "38 States",
      description: "In 38 states, the majority of new clean electricity demand by 2030 can be met by building solar and wind near existing interconnection. 775 gigawatts can be added through this according to the least-cost power system modeling."
    },
    {
      title: "Quick Wins Available",
      subtitle: "200 GW Ready",
      description: "Over 200 GW of fossil plants are barely used (running less than 15% of the time) and cost $20/MWh more to operate than typical plants - making them prime candidates for renewable additions."
    }
  ];

  // Renewable approach benefits
  const renewableBenefits = [
    {
      title: "Massive Firm Capacity Addition",
      subtitle: "256 GW Storage",
      description: "Integrating 6-hour battery storage at existing RE sites delivers 256 GW of firm, dispatchable capacity - over 10x more than the 22 GW of new gas plants expected by 2029."
    },
    {
      title: "Double Renewable Generation",
      subtitle: "+362 GW RE",
      description: "Existing interconnections can support an additional 362 GW of renewable energy (276 GW solar, 86 GW wind), representing a 141% increase from current 256 GW to 618 GW total."
    },
    {
      title: "Higher Interconnection Utilization",
      subtitle: "141% Increase",
      description: "Strategic co-location maximizes expensive grid infrastructure usage, dramatically improving interconnection utilization from current average of 37.5% (29.9% solar, 46.9% wind)."
    },
    {
      title: "Exceeds National Energy Needs",
      subtitle: "621 TWh Annually",
      description: "Optimizing existing interconnections yields 621 TWh of additional clean energy annually - 138% of forecasted U.S. electricity demand growth through 2029 (450 TWh)."
    },
    {
      title: "Regional Grid Reliability",
      subtitle: "5-6x Coverage in Key Regions",
      description: "ERCOT could meet 135% of projected peak growth, SPP and MISO could satisfy their peak needs 5-6x over, and PJM could fulfill 50% of its 29.6 GW increase within 1-2 years."
    }
  ];
  
  return (
    <Box 
      id="approach-section"
      ref={sectionRef}
      sx={{ 
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)',
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
          background: 'radial-gradient(circle, rgba(180,77,18,0.08) 0%, rgba(180,77,18,0) 70%)',
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
          background: 'radial-gradient(circle, rgba(0,86,162,0.08) 0%, rgba(0,86,162,0) 70%)',
          zIndex: 0
        }}
      />

      <Container maxWidth="xl">
        {/* Title section removed */}

        {/* THERMAL APPROACH SECTION */}
        <Box sx={{ mb: 6, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>


          <Card 
            elevation={3}
            className="fade-in-section"
            sx={{ 
              width: '100%',
              bgcolor: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            <CardContent sx={{ p: 2 }}>
              {/* Description and Image Section - Side by Side */}
              <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                {/* Left side: Description */}
                <Box sx={{ flex: 0.9, pr: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <ElectricBoltIcon sx={{ fontSize: 32, color: '#B44D12', mr: 1.5 }} />
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#ffffff', fontSize: '1.8rem' }}>
                      Thermal Interconnections
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.2rem', lineHeight: 1.6, mb: 3 }}>
                    Existing thermal power plants have established grid connections that sit unused for significant 
                    periods of time. By co-locating new solar and wind generation at these sites, we can bypass 
                    lengthy interconnection queues while making use of the current infrastructure.
                  </Typography>

                  {/* Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button 
                      variant="contained" 
                      size="small"
                      startIcon={<BarChartIcon sx={{ fontSize: '0.9rem' }} />}
                      href="https://scarcitytosurplus.com/dashboard" 
                      target="_blank"
                      sx={{ 
                        bgcolor: '#B44D12', 
                        '&:hover': { bgcolor: '#933F0F' },
                        mr: 1,
                        py: 0.7,
                        fontSize: '0.9rem'
                      }}
                    >
                      Dashboard
                    </Button>
                    <Button 
                      variant="outlined"
                      size="small"
                      startIcon={<PictureAsPdfIcon sx={{ fontSize: '0.9rem' }} />}
                      href="https://gspp.berkeley.edu/assets/uploads/page/Surplus_Interconnection.pdf" 
                      target="_blank"
                      sx={{ 
                        color: '#B44D12', 
                        borderColor: '#B44D12', 
                        '&:hover': { borderColor: '#933F0F' },
                        py: 0.7,
                        fontSize: '0.9rem'
                      }}
                    >
                      Report
                    </Button>
                  </Box>
                </Box>

                {/* Right side: Image */}
                <Box sx={{ width: '45%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/assets/thermal/idea.png"
                    alt="Thermal Plant Concept"
                    width={500}
                    height={400}
                    style={{ 
                      width: 'auto',
                      height: 'auto',
                      maxHeight: '324px',
                      objectFit: 'contain',
                      borderRadius: '6px'
                    }}
                    priority
                  />
                </Box>
              </Box>

              {/* Benefits Section - Horizontal */}
              <Box>
                <Box sx={{ 
                  borderLeft: '3px solid #B44D12', 
                  pl: 2, 
                  mb: 2,
                }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600, 
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '1.5rem'
                    }}
                  >
                    Key Results
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1 }}>
                  {thermalBenefits.map((benefit, index) => (
                    <Box
                      key={index}
                      sx={{ 
                        flex: '1 1 calc(33% - 16px)',
                        minWidth: '300px',
                        p: 0,
                        borderRadius: 1,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        bgcolor: 'rgba(180, 77, 18, 0.3)', 
                        py: 0.75, 
                        px: 1.5, 
                        borderRadius: '4px 4px 0 0',
                        width: '100%' 
                      }}>
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            fontWeight: 700,
                            fontSize: '1rem',
                            color: '#ffffff',
                            mr: 1.5
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            color: '#B44D12',
                            alignSelf: 'center'
                          }}
                        >
                          {benefit.subtitle}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        p: 1.75, 
                        bgcolor: 'rgba(180, 77, 18, 0.1)', 
                        flexGrow: 1,
                        border: '1px solid rgba(180, 77, 18, 0.2)',
                        borderTop: 'none',
                        borderRadius: '0 0 4px 4px'
                      }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'rgba(255,255,255,0.95)',
                            fontSize: '0.85rem',
                            lineHeight: 1.5
                          }}
                        >
                          {benefit.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        
        {/* RENEWABLE APPROACH SECTION */}
        <Box sx={{ mb: 2 }}>


          <Card 
            elevation={3}
            className="fade-in-section"
            sx={{ 
              width: '100%',
              bgcolor: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            <CardContent sx={{ p: 2 }}>
              {/* Description and Image Section - Side by Side */}
              <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                {/* Left side: Description */}
                <Box sx={{ flex: 0.9, pr: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <BatteryChargingFullIcon sx={{ fontSize: 32, color: '#B44D12', mr: 1.5 }} />
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#ffffff', fontSize: '1.8rem' }}>
                      Renewable Interconnections
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.2rem', lineHeight: 1.6, mb: 3 }}>
                    Existing renewable energy plants are often constrained by the variability of their power output. 
                    By adding energy storage and complementary generation, we can maximize the use of their interconnection 
                    capacity and provide more reliable power to the grid.
                  </Typography>

                  {/* Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button 
                      variant="contained" 
                      size="small"
                      startIcon={<BarChartIcon sx={{ fontSize: '0.9rem' }} />}
                      href="https://scarcitytosurplus.com/dashboard" 
                      target="_blank"
                      sx={{ 
                        bgcolor: '#B44D12', 
                        '&:hover': { bgcolor: '#933F0F' },
                        mr: 1,
                        py: 0.7,
                        fontSize: '0.9rem'
                      }}
                    >
                      Dashboard
                    </Button>
                    <Button 
                      variant="outlined"
                      size="small"
                      startIcon={<PictureAsPdfIcon sx={{ fontSize: '0.9rem' }} />}
                      href="https://gspp.berkeley.edu/assets/uploads/page/Surplus_Interconnection.pdf" 
                      target="_blank"
                      sx={{ 
                        color: '#B44D12', 
                        borderColor: '#B44D12', 
                        '&:hover': { borderColor: '#933F0F' },
                        py: 0.7,
                        fontSize: '0.9rem'
                      }}
                    >
                      Report
                    </Button>
                  </Box>
                </Box>

                {/* Right side: Image */}
                <Box sx={{ width: '45%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/assets/re/idea_re.png"
                    alt="Renewable Plant Enhancement"
                    width={500}
                    height={400}
                    style={{ 
                      width: 'auto',
                      height: 'auto',
                      maxHeight: '324px',
                      objectFit: 'contain',
                      borderRadius: '6px'
                    }}
                    priority
                  />
                </Box>
              </Box>

              {/* Benefits Section - Horizontal */}
              <Box>
                <Box sx={{ 
                  borderLeft: '3px solid #B44D12', 
                  pl: 2, 
                  mb: 2,
                }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600, 
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '1.5rem'
                    }}
                  >
                    Key Results
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1 }}>
                  {renewableBenefits.map((benefit, index) => (
                    <Box
                      key={index}
                      sx={{ 
                        flex: '1 1 calc(33% - 16px)',
                        minWidth: '300px',
                        p: 0,
                        borderRadius: 1,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        bgcolor: 'rgba(180, 77, 18, 0.3)', 
                        py: 0.75, 
                        px: 1.5, 
                        borderRadius: '4px 4px 0 0',
                        width: '100%' 
                      }}>
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            fontWeight: 700,
                            fontSize: '1rem',
                            color: '#ffffff',
                            mr: 1.5
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            color: '#B44D12',
                            alignSelf: 'center'
                          }}
                        >
                          {benefit.subtitle}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        p: 1.75, 
                        bgcolor: 'rgba(180, 77, 18, 0.1)', 
                        flexGrow: 1,
                        border: '1px solid rgba(180, 77, 18, 0.2)',
                        borderTop: 'none',
                        borderRadius: '0 0 4px 4px'
                      }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'rgba(255,255,255,0.95)',
                            fontSize: '0.85rem',
                            lineHeight: 1.5
                          }}
                        >
                          {benefit.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
