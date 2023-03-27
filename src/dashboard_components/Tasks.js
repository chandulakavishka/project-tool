import { React, useState, useEffect } from 'react'
import { Typography, Box, Stack } from '@mui/material'
import axios from 'axios'

const Task = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://localhost:44338/api/Tasks')
      .then(res => {
        setData(res.data)
      }).catch(err => console.log(err))
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
  const arr4 = data.filter(item => item.currentProgress < 2).map((item, index) => (
    <Typography variant='p' marginLeft='10px'>{item.taskName}</Typography>
  ))

  return (
    <>
      <Typography variant='h5' marginLeft='120px' >Tasks</Typography>
      <Box
        sx={{
          boxShadow: 5,
          borderColor: 'gray',
          width: 350,
          height: 170,
          marginBottom: 2,
          padding: 1,
          borderRadius: '15px',
          backgroundColor: '#fff'
        }}>
        <Stack gap={1} >

          <Typography variant='h6' textAlign='center'>{arr1.length} |  {arr2.length}</Typography>
          <Typography variant='h6' textAlign='center' paddingBottom='1px'>Total |  Closed</Typography>
          <Typography variant='h6' textAlign='center'>{arr3.length} |  {15}</Typography>
          <Typography variant='h6' textAlign='center'>Incomplete |  Overdue</Typography>


        </Stack>
      </Box>
    </>
  )
}

export default Task