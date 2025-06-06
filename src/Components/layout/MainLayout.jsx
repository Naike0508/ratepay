import { useState } from 'react';
import { Box, Drawer, AppBar, Toolbar, Typography } from '@mui/material';
import Sidebar from './Sidebar';

export default function MainLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">RatePay</Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}