import { React, useState } from 'react';
import { Box, IconButton, CssBaseline, List, Toolbar, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, TextField, Avatar, Tooltip, styled, Grid, Paper, Badge, Divider } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom';
import { useStyles } from '../../Styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import HouseIcon from '@mui/icons-material/House';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import RemainingTask from '../../dashboard_components/RemainingTask';
import Tasks from '../../dashboard_components/Tasks';
import NotificationPanel from '../../dashboard_components/NotificationPanel';
import CircleProgressBar from '../../dashboard_components/CircleProgressBar';
import Innovatives from '../../dashboard_components/Innovatives';
import Badges from '../../dashboard_components/Slideshow';
import { Calender } from '../../dashboard_components/Calender';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slideshow from '../../dashboard_components/Slideshow';


const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const settings = ['Profile', 'Logout'];

const AppDrawer = () => {
  const [popup, setPopup] = useState(false);
  const [open,setOpen] = useState(true);
  const [menu, setMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { classes } = useStyles();


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOpenUserMenu = (event) => {
    setMenu(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setMenu(null);
  };
  const boxopen =()=>{
    setPopup(true)
  };
  const handleClose = () => {
    setPopup(false);
  };

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
        {/* <Dialog open={popup} onClose={handleClose} >
          <DialogTitle sx={{display:'flex',alignItems:'center'}}> <NotificationsActiveIcon/> <Box paddingLeft={2}> Notification </Box> </DialogTitle>
          <Divider/>
          <Box width={300} margin={3}>
            <Stack gap={1}>
              <Typography variant='h6'>Notification 1</Typography>
            </Stack>
            <Stack gap={1} >
              <Typography variant='h6'>Notification 2</Typography>
            </Stack>
            <Stack gap={1}>
              <Typography variant='h6'>Notification 3</Typography>
            </Stack>
          </Box>
          <DialogContent>
           
            <Stack spacing={2}>
            </Stack>
          </DialogContent>     
        </Dialog> */}
      <Box sx={{ display: 'flex' }} >
        <CssBaseline />
        <AppBar position="fixed" open={open} elevation={0} color='inherit' >
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Stack sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="div">
                Dashboard
              </Typography>
            </Stack>

            <Stack direction='row' spacing={2} sx={{ flexGrow: 1.5 }}>
              <TextField size='small' defaultValue="Search" variant="outlined" sx={{ width: '320px' }}></TextField>
            </Stack>
            <Stack direction='row' spacing={2} >

              <IconButton>
                <NotificationsActiveIcon onClick={boxopen}/>
              </IconButton>
              <IconButton>
                <SettingsIcon />
              </IconButton>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                    <Avatar alt="Remy Sharp" src="../../images/Profile.png" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '20px' }}
                  id="menu-appbar"
                  anchorEl={menu}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(menu)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography varient='h3'>
                <b>
                    Chandula Kavishka
                </b>
                <br/>
                chandulakavishka@gmail.com
              </Typography>

            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton color="inherit"
              aria-label="close drawer"
              onClick={handleDrawerClose}
              edge="start"
              sx={{
                ml: 1,
                marginRight: 0,
                ...(!open && { display: 'none' }),
              }}>

              <MenuIcon />
            </IconButton>
            <Box>
              <img src='../../images/Logo.png' alt='icon' width={150} />
            </Box>
            <Stack sx={{
              marginRight: 0,
              ...(!open && { display: 'none' }),
            }}>

            </Stack>
          </DrawerHeader>

          <List>

            {menuItems.map(item => (
              <ListItem
                key={item.text}
                onClick={() => navigate(item.path)}
                className={(location.pathname === item.path) ? classes.active : null}
                disablePadding
                sx={{ display: 'block', marginBottom: '10px' }}
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
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} className={classes.drawerText} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', borderRadius: '5px',padding:'70px 0 0 20px' }}>
          
          <Box display='flex' border='none' >
            <Box style={{ paddingBottom: '0px', paddingRight: '60px' }}>
              <Box sx={{
                boxShadow: 2,
                borderColor: 'gray',
                width: 355,
                paddingLeft: 2,
                paddingBottom: 1,
                marginBottom: 1,
                marginLeft: 3,
                borderRadius: '5px',
                backgroundColor: '#fff'

              }}>
                <Calender />
              </Box>
              <Box>
                <RemainingTask />
              </Box>
            </Box>
            <Box display='grid'>
              <Box>
                <NotificationPanel />
              </Box>
              <Box marginLeft='10px'>
                <Box display='flex' >
                  <Box ><CircleProgressBar /></Box>
                  <Box ><Tasks /></Box>
                </Box>
                <Box display='flex'>
                  <Box ><Innovatives /></Box>
                  <Box><Slideshow /></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box >
      </Box>
    </>
  );
}

export default AppDrawer;

