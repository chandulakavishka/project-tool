
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
      <Box sx={{ display: 'flex', flex:1 }} >
          <CssBaseline/>
          <NavBar/>
          <Box component="main"
              sx={{
              width:'100%',
              height:'100vh',
              display:'grid',
              padding:'65px 20px 10px 0px',
              gridTemplateColumns:'5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%',
              gridTemplateRows:'10% 10% 10% 10% 10% 10% 10% 10% 10% 10%',
            }}>
              <Box
                sx={{
                  gridRow:'1/6',
                  gridColumn:'1/9',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'space-between',
                  alignItems:'center',
                  backgroundColor:'white',
                  background:'white',
                }}
              >
                <Calender/>
              </Box>
              <Box
                sx={{
                  gridRow:'1/5',
                  gridColumn:'9/21',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'space-between',
                  alignItems:'center',
                  padding:2,
                  backgroundColor:'white',
                  // background:'yellow',
                }}
              >
                <NotificationPanel/>
              </Box>
              <Box
                sx={{
                  gridRow:'6/11',
                  gridColumn:'1/9',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'space-between',
                  alignItems:'center',
                  padding:2,
                  backgroundColor:'white',
                  // background:'blue',
                }}
              >
                <RemainingTask/>
              </Box>
              <Box
                sx={{
                  gridRow:'5/8',
                  gridColumn:'9/15',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'space-between',
                  alignItems:'center',
                  backgroundColor:'white',
                  padding:1,
                  // background:'red',
                }}>
                  <CircleProgressBar/>
              </Box>
              <Box
                sx={{
                  gridRow:'5/8',
                  gridColumn:'15/21',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'space-between',
                  alignItems:'center',
                  backgroundColor:'white',
                  padding:1,
                  // background:'yellow',
                }}>
                  <Task/>
              </Box>
              <Box
                sx={{
                  gridRow:'8/11',
                  gridColumn:'9/15',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'space-between',
                  alignItems:'center',
                  backgroundColor:'white',
                  padding:1,
                }}>
                  <Innovatives/>
              </Box>
              <Box
                sx={{
                  gridRow:'8/11',
                  gridColumn:'15/21',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'space-between',
                  alignItems:'center',
                  backgroundColor:'white',
                  padding:1,
                  // background:'blue',
                }}>
                  <Slideshow/>
              </Box>
          </Box>
      </Box>
     
  )
}

export default Dashboard;
