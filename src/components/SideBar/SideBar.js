import React from 'react';
import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiDrawer from '@mui/material/Drawer';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import HouseIcon from '@mui/icons-material/House';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStyles } from '../../Styles';

const drawerWidth = 260;

const openedMixin = (theme) => ({
    width: drawerWidth,
    backgroundColor: 'black',
    color: 'white',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    backgroundColor: 'black',
    color: 'white',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 10px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
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

const SideBar = ({
    open,
    setOpen,
    popup,
    setPopup,
    menu,
    setMenu,
    handleDrawerClose,
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { classes } = useStyles();

    const menuItems = [
        {
            text: "Dashboard",
            icon: <HouseIcon fontSize='medium' className={classes.drawerIcon}  />,
            path: '/'
        },
        {
            text: "Projects",
            icon: <AccountTreeOutlinedIcon fontSize='medium' className={classes.drawerIcon} />,
            path: '/projects'
        },
        {
            text: "Modules",
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
        {
            text: "Settings",
            icon: <SettingsIcon fontSize='medium' className={classes.drawerIcon} />,
            path: '/Setting'
        },
    ]

    return (
        <Drawer variant="permanent" open={open} sx={{ backgroundColor: 'black', color: 'white',height:'100vh' }}>
            <DrawerHeader >
                <IconButton color="inherit"
                    aria-label="close drawer"
                    onClick={handleDrawerClose}
                    edge="start"
                    sx={{
                        marginLeft: 1,
                        marginRight: 1,
                        mt: '-10px',
                        ...(!open && { display: 'none' }),
                    }}>
                    <MenuIcon />
                </IconButton>

                <Box>
                    <img src='../../images/Logo.png' alt='icon' width={130} style={{margin:'0px 50px 5px 0'}} />
                </Box>

                <Stack sx={{
                    marginRight: 0,
                    ...(!open && { display: 'none' }),
                }}>
                </Stack>
            </DrawerHeader>
            <List sx={{display:'flex',flexDirection:'column',alignItems:'space-between'}}>
                <div style={{marginBottom:'10rem'}}>
                {menuItems.map(item => (
                    <ListItem
                        key={item.text}
                        onClick={() => { localStorage.setItem("header", item.text); navigate(item.path); }}
                        className={(location.pathname === item.path) ? classes.active : null}
                        disablePadding
                        sx={{ display: 'block', marginBottom: '10px',ml:'10px' }}
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
                </div>
                <ListItem
                        onClick={() => {navigate('/LogIn'); }}
                        className={(location.pathname === '/LogIn') ? classes.active : null}
                        disablePadding
                        sx={{ display: 'block', marginBottom: '0px',ml:'10px' }}
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
                                <LogoutIcon fontSize='medium' className={classes.drawerIcon} />
                            </ListItemIcon>
                            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} className={classes.drawerText} />

                        </ListItemButton>
                    </ListItem>
            </List>


            {/* </Box> */}

            
        </Drawer>
    )
}

export default SideBar