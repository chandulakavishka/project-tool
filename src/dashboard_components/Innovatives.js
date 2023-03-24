import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
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
          <Typography variant='h5' marginLeft='100px'>Innovatives</Typography>
        <Stack gap={0.5} paddingTop='15px'>

          <Typography variant='h6' textAlign='center' >61 |  32</Typography>
          <Typography variant='h6' textAlign='center'>Total |  Closed</Typography>
          <Typography variant='h6' textAlign='center'>29 |  13</Typography>
          <Typography variant='h6' textAlign='center'>Incomplete |  Overdue</Typography>
        </Stack>
      </Box>
    </>
  )
}

export default Innovatives