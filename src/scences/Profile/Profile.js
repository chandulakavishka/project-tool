import { CssBaseline, Typography,Box, Avatar } from '@mui/material'
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Grid from 'react-loading-icons/dist/esm/components/grid'

const Profile = () => {
  return (
    <Box sx={{ display: 'flex' }} >

      <CssBaseline/>
      <NavBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', borderRadius: '5px',padding:'70px 0 0 20px' }}>
      <Box sx={{m:'30px 10px',display:'flex'}}>
            <Box sx={{border:'solid black 1px',width: 350, height: 350, marginRight:8}} >
                <Avatar src='../../logo512.png' sx={{ width: 250, height: 250, margin:'auto' }}/>
                <Typography variant='h1'>abc</Typography>
            </Box>
            <Box sx={{border:'solid black 1px',width: 350, height: '80vh', marginRight:6}}>

            <Typography variant='h1' margin='auto' textAlign='center' >abc</Typography>
            </Box>
            <Box sx={{border:'solid black 1px',width: 350, height: '80vh',margin:'10px 0'}}>

            <Typography variant='h1' margin='auto' textAlign='center' >abc</Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Profile