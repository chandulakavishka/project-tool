import React from 'react';
import { Box, IconButton, Toolbar, Typography, Stack, TextField, Avatar, Tooltip, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 220;

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

const settings = ['Profile', 'Logout'];

const TopBar = ({
    open,
    setOpen,
    popup,
    setPopup,
    menu,
    setMenu,
    handleDrawerOpen,
    handleOpenUserMenu,
    handleCloseUserMenu,
    boxopen,
    header,
}) => {
    return (
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
                        {header}
                    </Typography>
                </Stack>

                <Stack direction='row' spacing={2} sx={{ flexGrow: 1.5 }}>
                    <TextField size='small' defaultValue="Search" variant="outlined" sx={{ width: '320px' }}></TextField>
                </Stack>

                <Stack direction='row' spacing={2} >
                    <IconButton>
                        <NotificationsActiveIcon onClick={boxopen} />
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
                        <br />
                        chandulakavishka@gmail.com
                    </Typography>

                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar