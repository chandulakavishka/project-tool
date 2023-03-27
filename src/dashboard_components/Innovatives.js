import React from 'react'
import { Typography, Box, Stack, Grid } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import { urlTasks } from '../endpoint'



const Innovatives = () => {
  return (
    <>
      <Box
        sx={{
          boxShadow: 5,
          borderColor: 'gray',
          width: 350,
          height:180,
          marginRight: 10,
          borderRadius: '10px',
          backgroundColor: '#fff'
        }}>
          <Typography variant='h5' marginLeft='110px'>Innovatives</Typography>
        <Stack gap={0.4} paddingTop='10px' display='grid'>

          <Typography variant='p' margin='auto'>61 |  32</Typography>
          <Typography variant='h6' margin='auto '><b>Total |  Closed</b></Typography>
          <Typography variant='p' margin='auto'>29 |  13</Typography>
          <Typography variant='h6' margin='auto' display='flex' ><b>Inprogress | New</b></Typography>
        </Stack>
      </Box>
    </>
  )
}

export default Innovatives