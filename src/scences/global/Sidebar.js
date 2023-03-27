import { React, useState } from 'react'
import { Drawer, Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Stack } from '@mui/system';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import HouseIcon from '@mui/icons-material/House';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStyles } from '../../Styles';


export default function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const open = false;
  const navigate = useNavigate();
  const location = useLocation();
  const { classes } = useStyles();


  const menuItems = [
    {
      text: "Dashboard",
      icon: <HouseIcon fontSize='medium' className={classes.drawerIcon} />,
      path: '/'
    },
    {
      text: "Projects",
      icon: <AccountTreeOutlinedIcon fontSize='medium' className={classes.drawerIcon} />,
      path: '/projects'
    },
    {
      text: "Module",
      icon: <SupportAgentOutlinedIcon fontSize='medium' className={classes.drawerIcon} />,
      path: '/Modules'
    },
    {
      text: "Members",
      icon: <SupervisedUserCircleOutlinedIcon fontSize='medium' className={classes.drawerIcon} />,
      path: '/Members'
    },
    {
      text: "Reports",
      icon: <ReceiptLongOutlinedIcon fontSize='medium' className={classes.drawerIcon} />,
      path: '/Reports'
    },
  ]
  return (
    <>
      <IconButton
        size='large'
        edge='start'
        color='inhrit'
        aria-label='logo'
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Stack sx={{ ml: 1 }} direction='row' spacing={1} >
            <IconButton
              size='large'
              edge='start'
              color='inhrit'
              aria-label='logo'
              onClick={() => setIsDrawerOpen(false)}
            >
              <MenuIcon />
            </IconButton>
            <img src='../../images/Logo.png' height={60} width={120} alt='icon' />
          </Stack>
          <Stack>
            <List>
              {menuItems.map(item => (
                <ListItem
                  key={item.text}
                  onClick={() => navigate(item.path)}
                  className={(location.pathname === item.path) ? classes.active : null}
                  disablePadding 
                  sx={{ display: 'block',marginBottom:'10px' }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ml:1}} className={classes.drawerText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Box>
      </Drawer>
    </>
  )
}
