import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';

const NavBar = () => {
    const [popup, setPopup] = useState(false);
    const [open, setOpen] = useState(true);
    const [menu, setMenu] = useState(null);
    // const [header, setHeader] = useState("Dashboard");

    const header = localStorage.getItem("header");

    // useEffect(() => {
    //     setHeader(localStorage.getItem("header"))
    // }, []);

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

    const boxopen = () => {
        setPopup(true)
    };

    const handleClose = () => {
        setPopup(false);
    };

    return (
        <>
            <TopBar
                open={open}
                setOpen={setOpen}
                popup={popup}
                setPopup={setPopup}
                menu={menu}
                setMenu={setMenu}
                handleDrawerOpen={handleDrawerOpen}
                handleOpenUserMenu={handleOpenUserMenu}
                handleCloseUserMenu={handleCloseUserMenu}
                boxopen={boxopen}
                header={header}
            />

            <SideBar
                open={open}
                setOpen={setOpen}
                popup={popup}
                setPopup={setPopup}
                menu={menu}
                setMenu={setMenu}
                handleDrawerClose={handleDrawerClose}
            // setHeader={setHeader}
            />
        </>
    )
}

export default NavBar