import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SidebarDemo from '../global/SidebarDemo'
import Topbar from '../global/Topbar'

export const Profile = () => {
  return (
    <>
        <Topbar/>
        <SidebarDemo>
          <Box>
            <Typography variant='h1'>Profile</Typography>
          </Box>
        </SidebarDemo>
        
    </>
  )
}
