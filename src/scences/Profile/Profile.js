import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AppDrawerDemo from '../global/AppDrawerDemo'
import Topbar from '../global/Topbar'

export const Profile = () => {
  return (
    <>
        <Topbar/>
        <AppDrawerDemo>
          <Box>
            <Typography variant='p'>Profile</Typography>
          </Box>
        </AppDrawerDemo>
        
    </>
  )
}
