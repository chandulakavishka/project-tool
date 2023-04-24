import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Innovatives = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get('https://localhost:44338/api/Innovatives')
      .then(res => {
        setData(res.data)
      }).catch(err => {console.log(err)
        setError(true) })
  }, [])

  const arr1 = data.map((item, index) => (
    <Typography variant='p' marginLeft='10px'>{item.Innovatives}</Typography>
  ))
  console.log(arr1);

  return (
    <>
      <Box
        sx={{
          boxShadow: 3,
          borderColor: 'gray',
          width: 350,
          height:180,
          marginRight: 10,
          borderRadius: '5px',
          backgroundColor: '#fff'
        }}>
          <Typography variant='h5' marginLeft='110px'>Innovatives</Typography>
        <Stack gap={0.4} paddingTop='10px' display='grid'>

          <Typography variant='p' margin='auto'>{(error !== true) ? arr1.length : '0'} |  {(error !== true) ? arr1.length : '0'}</Typography>
          <Typography variant='h6' margin='auto ' paddingLeft='20px'><b>Total |  Closed</b></Typography>
          <Typography variant='p' margin='auto'> {(error !== true) ? arr1.length : '0'} |  {(error !== true) ? arr1.length : '0'}</Typography>
          <Typography variant='h6' paddingLeft='61px' ><b>Inprogress | New</b></Typography>
        </Stack>
      </Box>
    </>
  )
}

export default Innovatives