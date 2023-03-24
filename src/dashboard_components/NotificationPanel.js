import { React, useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';

import axios from 'axios';



const NotificationPanel = () => {
  const current = new Date();
  const date = `${current.getDate()} ${current.getMonth() + 1} ${current.getFullYear()}`;
  const [data, setData] = useState(new Date());

  useEffect(() => {
    axios.get('https://localhost:44338/api/Notification')
      .then(res => {
        console.log("Getting Backend Tasks data", res.data)
        setData(res.data)
      }).catch(err => console.log(err))
  }, [])
  return (
    <>
      <Typography variant='h4' align='left' marginLeft='10px'><b>Notifications</b></Typography>

      <Box
        sx={{
          width: 800,
          height: 160,
          backgroundColor: '#163a78',
          borderRadius: '15px',


        }}
      >

        <Box>
          <Box >
            <Box paddingTop='12px' paddingLeft='20px'>
              <Box display='flex'>
                <Box >
                  <img width='60px' height='60px' src='../../images/note.png' alt='icon' />
                </Box>
                <Box display='gird'>
                  <Typography variant='h6' color='white' align='left' marginLeft='40px' marginTop='8px'>You Were Assign New Task</Typography>
                  <Typography variant='p' color='white' align='left' marginLeft='50px'>18 February 2023 - 11 00 am</Typography>
                  <Box align='left' marginLeft='45px' marginTop={2}>
                    <Button sx={{
                      width: 130,
                      height: 40,
                      backgroundColor: '#b89842',
                      flexGrow: 0,
                      borderRadius: '10px',
                      '&:hover': {
                        backgroundColor: 'success.main',
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }} >Assign Now</Button>
                  </Box>
                </Box>
                <Box style={{ width: '120px', height: '120px', marginLeft: '190px', borderRadius: '50%', marginTop: '40px', border: '2px solid white', zIndex: 2 ,backgroundColor: '#163a78 '}}> 
                  <img width={80} marginTop='400px' src='../../images/notes.png' alt="" />
                </Box>
                <Box style={{ width: '150px', height: '140px', borderRadius: '50%', marginLeft: '-60px', marginTop: '25px', border: '2px solid white', zIndex: 1,backgroundColor: '#163a78 ' }}>
                  <img  width={120} src='../../images/notepad.png' alt="" />

                </Box>
              </Box>
            </Box>
            <Box>
            </Box>
          </Box>
          <Box>
            <Box style={{ display: 'flex', marginBottom: '15px', marginLeft: '40px' }}>

            </Box>



          </Box>


          <Box
            sx={{
              width: '150px',
              height: '150px',
              marginLeft: '30px',
              borderRadius: '20px',
              display: 'flex'

            }}
          >

            {/* <img style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '900px', border: '2px solid white', zIndex: 2}} src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt="" />
            <img style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '-60px', border: '2px solid white', zIndex: 1 }} src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt="" /> */}
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default NotificationPanel;

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];