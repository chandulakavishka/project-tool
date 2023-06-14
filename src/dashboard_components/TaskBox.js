import { React, useState, useEffect } from 'react'
import { Typography, Box, Stack} from '@mui/material'
import axios from 'axios'

const Task = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get('https://localhost:7224/api/Tasks')
      .then(res => {
        setData(res.data)
      }).catch(err => {console.log(err)
        setError(true) })
  }, [])

  const arr1 = data.filter(item => item.currentProgress < 3).map((item, index) => (
    <Typography variant='p' marginLeft='10px'>{item.taskName}</Typography>
  ))
  const arr2 = data.filter(item => item.currentProgress === 2).map((item, index) => (
    <Typography variant='p' marginLeft='10px'>{item.taskName}</Typography>
  ))
  const arr3 = data.filter(item => item.currentProgress < 2).map((item, index) => (
    <Typography variant='p' marginLeft='10px'>{item.taskName}</Typography>
  ))
  const arr4 = data.filter(item => item.currentProgress < 1).map((item, index) => (
    <Typography variant='p' marginLeft='10px'>{item.taskName}</Typography>
  ))

  return (
    <>
          <Typography variant='h5' marginLeft='120px' >Tasks</Typography>
      <Box
        sx={{
          boxShadow: 3,
          borderColor: 'gray',
          width: 350,
          height: 170,
          marginBottom: 3,
          padding: 1,
          borderRadius: '5px',
          backgroundColor: '#fff',
          '&:hover': {
            width: 355,
            opacity: [0.9, 0.8, 0.7],
          }
        }}>
        <Stack gap={1} >

          <Typography variant='h6' textAlign='center'>{(error !== true) ? arr1.length : '0'} |  {(error !== true) ?arr2.length : '0'}</Typography>
          <Typography variant='h6' textAlign='center' paddingLeft='20px'><b>Total |  Closed</b></Typography>
          
          <Typography variant='h6' textAlign='center'>{(error !== true) ?arr3.length : '0'} |  {(error !== true) ?arr4.length : '0'}</Typography>
          <Typography variant='h6' textAlign='center'><b>Incomplete |  Overdue</b></Typography>
        </Stack>
      </Box>
    </>
  )
}

export default Task