'use client';

import React from 'react';
import { Grid as MuiGrid, Box } from '@mui/material';
import { styled } from '@mui/system';

// Create a styled Grid component that accepts our responsive props
export const Grid = styled(MuiGrid)(({ theme }) => ({
  display: 'grid',
}));

// Utility responsive container component
export const ResponsiveContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
  [theme.breakpoints.up('sm')]: {
    padding: '0 2rem',
  },
}));
