import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import DeleteIcon from '@mui/icons-material/Add';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import Select from "react-select";

import ProjectCard from './components/ProjectCard';

const Projects = () => {

  return (
    <>
      <Box sx={{ display: 'flex' }} >
        <CssBaseline />

        <NavBar />

        <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', borderRadius: '5px', padding: '70px 20px 10px 20px' }}>
          <Typography variant='h4'>
            Project
          </Typography>
        </Box>
      </Box >
    </>
  )
}

export default Projects