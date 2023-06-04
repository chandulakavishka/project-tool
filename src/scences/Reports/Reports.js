import React from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';

const Report = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }} >
        <CssBaseline />

        <NavBar />

        <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', borderRadius: '5px', padding: '70px 0 0 20px' }}>
          <Box display='flex' border='none' >
            <Typography variant='h2'>
              Reports
            </Typography>
          </Box>
        </Box>
      </Box >
    </>
  )
}

export default Report