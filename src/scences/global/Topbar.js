import React from 'react'
import { AppBar, IconButton, TextField, Toolbar, Typography, Box } from '@mui/material'
import Sidebar from './Sidebar'
import { Stack } from '@mui/system'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';


const settings = ['Profile','Dashboard', 'Logout'];

const Topbar = (props) => {
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
        <Stack sx={{ flexGrow: 1 }}>
          <Typography varient='h3' component='div' >
            {props.subject}
          </Typography>
        </Stack>
        <Stack direction='row' spacing={2} sx={{ flexGrow: 1.1 }}>
          <TextField size='small' defaultValue="Search" variant="outlined" sx={{ width: '320px' }}></TextField>
        </Stack>
        <Stack direction='row' spacing={2} >
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="../../images/Profile.png" />
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
          {/* <Typography varient='h3'>
                <b>
                    Chandula Kavishka
                </b>
                <br/>
                chandulakavishka@gmail.com
              </Typography> */}
        </Stack>

      </Toolbar>
    </AppBar>
  )
}

export default Topbar;