import { CssBaseline, Typography } from '@mui/material'
import React from 'react'
import Topbar from '../global/Topbar'
import NavBar from '../../components/NavBar/NavBar'

const Projects = () => {
  return (
    <>
      <CssBaseline/>
      <NavBar/>
      <Typography variant='h2'>
        Project
      </Typography>
    </>
  )
}

export default Projects