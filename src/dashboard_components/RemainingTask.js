import React from 'react'
import { Typography, Box, Grid, Stack } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
// import { urlTasks } from '../endpoint'

const RemainingTask = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://localhost:44338/api/Tasks')
      .then(res => {
        setData(res.data)
      }).catch(err => console.log(err))
  }, [])

  const arr1 = data.filter(item => item.currentProgress < 2).map((item, index) => (
    <Typography variant='p'  marginLeft='10px'>{item.taskName}</Typography>
 ))

  return (
    <>
      <Typography variant='h5' align='left' marginLeft='14px' marginBottom='10px'>RemainingTask ({arr1.length})</Typography>
      <Box
        sx={{
          boxShadow: 3,
          marginLeft: 2,
          borderColor: 'gray',
          width: 370,
          height:270,
          padding: 4,
          borderRadius: '5px',
          backgroundColor: '#fff',
          overflow: 'hidden'
        }}>
        <Stack gap={1}>
          {data.filter(item => item.currentProgress < 2).map((item, index) => (
             <Stack direction="row" gap={1} alignItems="center" key={index} sx={{
              padding: 0.5,
             
            }}>
             <EventNoteOutlinedIcon fontSize='medium' />
             <Typography variant='p'  marginLeft='10px'>{item.taskName}</Typography>
           
           </Stack>
          ))}
        </Stack>


      </Box>
    </>
  )
}

export default RemainingTask

