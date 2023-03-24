import React from 'react'
import { Typography, Box, Stack } from '@mui/material'

const Task = () => {
 

  return (
    <>
          <Typography variant='h5' marginLeft='120px' >Tasks</Typography>
      <Box 
        sx={{
          boxShadow: 5,
          borderColor: 'gray',
          width: 350,
          height: 170,
          marginBottom:2,
          padding: 1,
          borderRadius: '15px',
          backgroundColor: '#fff'
        }}>
          <Stack gap={1} >
          
              <Typography variant='h6'  textAlign='center'>61 |  32</Typography>
              <Typography variant='h6'  textAlign='center'paddingBottom='1px'>Total |  Closed</Typography>
              <Typography variant='h6'  textAlign='center'>29 |  13</Typography>
              <Typography variant='h6'  textAlign='center'>Incomplete |  Overdue</Typography>
              
              
           </Stack>
      </Box>
    </>
  )
}

export default Task