
import React from "react"
import { CssBaseline,Box,Grid } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import CircleProgressBar from "../../dashboard_components/CircleProgressBar";
import Innovatives from "../../dashboard_components/Innovatives";
import Task from "../../dashboard_components/TaskBox";
import NotificationPanel from "../../dashboard_components/NotificationPanel";
import { Calender } from "../../dashboard_components/Calender";
import RemainingTask from "../../dashboard_components/RemainingTask";
import Slideshow from "../../dashboard_components/Slideshow";


const Dashboard = () => {  
  return (
      <>
      <Box sx={{ display: 'flex' }} >
          <CssBaseline/>
          <NavBar/>
          <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', borderRadius: '5px',padding:'70px 0 0 20px',minHeight: "710px" }}>
          <Box sx={{ flexGrow: 1, margin: "5px 30px"}}>
                        <Grid container columnSpacing={6} >
                            <Grid item xs={4} >
                             <Box sx={{
                                  boxShadow: 2,
                                  borderColor: 'gray',
                                  width: 350,
                                  paddingLeft: '3%',
                                  paddingBottom: 1,
                                  marginBottom: 1,
                                  marginLeft: 3,
                                  borderRadius: '5px',
                                  backgroundColor: '#fff'
                                  
                                }}>
                                  <Calender/>
                                </Box>
                                <Box>
                                  <RemainingTask/>
                                </Box>
                            </Grid>
                            <Grid item xs={6} > 
                                  <Box >
                                    <NotificationPanel/>
                                  </Box>
                                  <Box marginLeft='0px'>
                                    <Box sx={{ display: { xl:'flex',sm: 'block' } }} marginBottom='10px'>
                                      <Box ><CircleProgressBar/></Box>
                                      <Box ><Task/></Box>
                                    </Box>
                                    <Box sx={{ display: { xl:'flex',sm: 'block' } }}>
                                      <Box ><Innovatives/></Box>
                                      <Box><Slideshow/></Box>
                                    </Box>
                                  </Box>
                            </Grid>
                        </Grid>
                    </Box>
          </Box >
         </Box>
      </>
  )
}

export default Dashboard;
