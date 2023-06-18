import { CssBaseline, Typography,Box } from '@mui/material'
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

const Projects = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }} >

      <CssBaseline/>
      <NavBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', borderRadius: '5px',padding:'70px 0 0 20px' }}>

      <Typography variant='h4'>
        Project
      </Typography>
      </Box>
    </Box>
    </>
  )
}

export default Projects