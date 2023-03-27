import { Typography } from '@mui/material'
import React from 'react'
import Topbar from '../global/Topbar'

const Member = () => {
  return (
    <>
      <Topbar subject='Member'/>
      <Typography variant='h2'>
          Members
      </Typography>
    </>
  )
}

export default Member