import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import HouseIcon from '@mui/icons-material/House';
import IMG from '../global/sideBar.jpg'
const drawerWidth = 240;

export default function Test(props) {
    
      
    const menuItems = [
        {
          text: "Dashboard",
          icon: <HouseIcon fontSize='medium' />,
        
        },
        {
          text: "Projects",
          icon: <AccountTreeOutlinedIcon fontSize='medium' />,
      
        },
        {
          text: "Module",
          icon: <SupportAgentOutlinedIcon fontSize='medium' />,
       
        },
        {
          text: "Members",
          icon: <SupervisedUserCircleOutlinedIcon fontSize='medium'  />,
        
        },
        {
          text: "Reports",
          icon: <ReceiptLongOutlinedIcon fontSize='medium'  />,
          
        },
      ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <img src={IMG} alt='icon' width={150} />
        <List>
        {menuItems.map(item => (
                <ListItem
                  key={item.text}
                  disablePadding 
                  sx={{ display: 'block',marginBottom:'10px' }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ml:1}}  />
                  </ListItemButton>
                </ListItem>
              ))}
        </List>
      </Drawer>
      <Box>
            {props.childern}      
      </Box>
      </Box>
      );
}