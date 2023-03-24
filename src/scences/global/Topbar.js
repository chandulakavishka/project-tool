import React from 'react'
import { AppBar,IconButton,TextField,Toolbar,Typography,Box } from '@mui/material'
import Sidebar from './Sidebar'
import { Stack } from '@mui/system'
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Topbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position='static' backgroundColor='#fff' color='transparent' elevation={0}>
        <Toolbar>
            <Stack size='large' edge='start' color='inherit' aria-label='menu-icon'>
                <Sidebar />
            </Stack>
        <Stack sx={{flexGrow: 1 }}>
            <Typography varient='h3' component='div' >
                MBOs And Innovative Impact
            </Typography>           
        </Stack>
        <Stack direction='row' spacing={2} sx={{flexGrow: 1.5}}>
            <TextField label='Search' sx={{ width: '520px' }}></TextField>
        </Stack>
        <Stack direction='row' spacing={2} >
            <IconButton>
                <MessageIcon/>
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>
            <IconButton>
                <SettingsIcon/>
            </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>    
            <Typography varient='h6'>
                name
            </Typography>
        </Stack>

        </Toolbar>
    </AppBar>
  )
}

export default Topbar;