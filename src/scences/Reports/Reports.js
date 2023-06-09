import { CssBaseline, Typography } from '@mui/material'
import React from 'react'
import Topbar from '../global/Topbar'
import NavBar from '../../components/NavBar/NavBar'

const Report = () => {
  return (
    <>
      <CssBaseline/>
      <NavBar/>
      <Typography variant='h2'>
        Reports
      </Typography>
    </>
  )
}

export default Report