import { CssBaseline, Typography } from '@mui/material'
import React from 'react'
import Topbar from '../global/Topbar'
import NavBar from '../../components/NavBar/NavBar'

const Modules = () => {
  return (
    <>
      <CssBaseline/>
      <NavBar/>
      <Typography variant='h2'>
        Modules
      </Typography>
    </>
  )
}

export default Modules