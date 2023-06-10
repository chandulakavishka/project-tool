import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select, TextField } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import { getMeetings } from '../../api';

const Meetings = () => {
    const navigate = useNavigate();

    const [age, setAge] = React.useState('');

    const newMeeting = () => {
        navigate("/NewMeeting")
    }

    useEffect(() => {
        getMeetings(
            //id...........
        )
            .then((out) => {
                // if (out.status === 200) {
                if (!out.data.error) {
                    // const rows = out.data.data;
                    // if (rows.length !== 0) {
                    //     setAllSubscribers(rows);
                    //     appAction.setAllSubscriberDispatch(rows)
                    // }
                } else {
                    console.log(out.data.message);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />

                <NavBar />

                <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', padding: '70px 20px 10px 20px', minHeight: "730px" }}>
                    <Box sx={{ flexGrow: 1, margin: "20px 30px" }}>
                        <Grid container columnSpacing={20} style={{ marginTop: "10px" }}>
                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    style={{ width: "100%", height: "50px", borderRadius: "5px", textTransform: 'none', fontSize: "20px" }}
                                    onClick={() => newMeeting()}
                                >
                                    New Meetings
                                </Button>

                                <Typography style={{ marginTop: "50px", fontSize: "30px" }}>
                                    Meeting Notes
                                </Typography>

                                <Stack direction="row" spacing={2} style={{ marginTop: "20px", justifyContent: "space-between" }}>
                                    <div>
                                        {/* <InputLabel id="demo-simple-select-label">Project</InputLabel> */}
                                        <Typography style={{ marginBottom: "5px", fontSize: "18px" }}>
                                            Project
                                        </Typography>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            // label="Age"
                                            onChange={handleChange}
                                            style={{ width: "250px" }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </div>

                                    <div>
                                        {/* <InputLabel id="demo-simple-select-label">Date</InputLabel> */}
                                        <Typography style={{ marginBottom: "5px", fontSize: "18px" }}>
                                            Date
                                        </Typography>
                                        <TextField
                                            id="outlined-basic"
                                            variant="outlined"
                                            type="date"
                                            // value={date}
                                            style={{ width: "250px" }}
                                        // onChange={(e) => setDate(e.target.value)}
                                        />
                                    </div>
                                </Stack>

                                <Button
                                    variant="contained"
                                    style={{ width: "160px", height: "50px", borderRadius: "5px", textTransform: 'none', marginTop: "25px", float: "right", fontSize: "16px" }}
                                >
                                    Search
                                </Button>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography style={{ fontSize: "30px" }}>
                                    Upcoming Meetings
                                </Typography>

                                <Box
                                    sx={{
                                        boxShadow: 3,
                                        borderColor: 'gray',
                                        backgroundColor: "#FFFFFF",
                                        padding: "10px 30px 20px 30px",
                                        width: "85%",
                                        borderRadius: "5px",
                                        overflow: 'hidden',
                                        marginTop: "10px",
                                    }}
                                >
                                    <Link style={{ marginTop: "10px", fontSize: "15px", textDecoration: 'none', display: "flex", gap: "5px", alignItems: "center", color: "#000000" }} to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Upcoming Meetings- 000000001
                                    </Link>
                                    <Link style={{ marginTop: "10px", fontSize: "15px", textDecoration: 'none', display: "flex", gap: "5px", alignItems: "center", color: "#000000" }} to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Upcoming Meetings- 000000002
                                    </Link>
                                    <Link style={{ marginTop: "10px", fontSize: "15px", textDecoration: 'none', display: "flex", gap: "5px", alignItems: "center", color: "#000000" }} to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Upcoming Meetings- 000000003
                                    </Link>
                                    <Link style={{ marginTop: "10px", fontSize: "15px", textDecoration: 'none', display: "flex", gap: "5px", alignItems: "center", color: "#000000" }} to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Upcoming Meetings- 000000004
                                    </Link>
                                </Box>

                                <Typography style={{ marginTop: "30px", fontSize: "30px" }}>
                                    Previous Meetings
                                </Typography>

                                <Box
                                    sx={{
                                        boxShadow: 3,
                                        borderColor: 'gray',
                                        backgroundColor: "#FFFFFF",
                                        padding: "10px 30px 20px 30px",
                                        width: "85%",
                                        borderRadius: "5px",
                                        overflow: 'hidden',
                                        marginTop: "10px",
                                    }}
                                >
                                    <Link style={{ marginTop: "10px", fontSize: "15px", textDecoration: 'none', display: "flex", gap: "5px", alignItems: "center", color: "#000000" }} to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Previous Meetings- 000000001
                                    </Link>
                                    <Link style={{ marginTop: "10px", fontSize: "15px", textDecoration: 'none', display: "flex", gap: "5px", alignItems: "center", color: "#000000" }} to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Previous Meetings- 000000002
                                    </Link>
                                    <Link style={{ marginTop: "10px", fontSize: "15px", textDecoration: 'none', display: "flex", gap: "5px", alignItems: "center", color: "#000000" }} to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Previous Meetings- 000000003
                                    </Link>
                                    <Link style={{ marginTop: "10px", fontSize: "15px", textDecoration: 'none', display: "flex", gap: "5px", alignItems: "center", color: "#000000" }} to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Previous Meetings- 000000004
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default Meetings