import React from 'react'
import { Typography, Box, Grid, Stack } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

const RemainingTask = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get('https://localhost:7224/api/Tasks')
      .then(res => {
        setData(res.data)
      }).catch(err => {
        console.log(err)
        setError(true)
      })
  }, [])

  const arr1 = data.filter(item => item.currentProgress < 2).map((item, index) => (
    <Typography variant='p' marginLeft='10px'>{item.taskName}</Typography>
  ))

  return (
    <>
      <Typography variant='h5' align='left' marginLeft='14px' marginBottom='10px'><b>RemainingTask ({arr1.length})</b></Typography>
      <Box
        sx={{
          boxShadow: 3,
          marginLeft: 2,
          borderColor: 'gray',
          width: 370,
          height: 275,
          padding: 3,
          borderRadius: '5px',
          backgroundColor: '#fff',
          overflow: 'hidden'
        }}>
        <Stack gap={1}>

          {(error === false) ? data.filter(item => item.currentProgress < 2).map((item, index) => (
            <Stack direction="row" gap={1} alignItems="center" key={index} sx={{
              padding: 0.5,

            }}>
              <EventNoteOutlinedIcon fontSize='medium' />
              <Typography variant='p' marginLeft='10px'>{item.taskName}</Typography>

            </Stack>
          )) : <Box style={{justifyContent:'center',alignItems:'center',display:'grid',margin:'auto',position:'relative',marginTop:'60px'}}>
            <img width={65} src='../../images/loading.gif' alt='loading gif' />
          </Box>
          }
        </Stack>
      </Box>
    </>
  )
}

export default RemainingTask
