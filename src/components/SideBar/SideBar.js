import React from 'react';
import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiDrawer from '@mui/material/Drawer';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import HouseIcon from '@mui/icons-material/House';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStyles } from '../../Styles';
import SettingsIcon from '@mui/icons-material/Settings';

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
        {
            text: "Settings",
            icon: <SettingsIcon fontSize='medium' className={classes.drawerIcon} />,
            path: '/Setting'
        },
    ]

    return (
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
                        onClick={() => { localStorage.setItem("header", item.text); navigate(item.path); }}
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
    )
}

export default SideBar