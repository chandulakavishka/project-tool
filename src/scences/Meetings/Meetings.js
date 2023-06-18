import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select, TextField } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import { getMeetings } from '../../api';
import "../../styles/MainStyles.css";
import "../../styles/Meetings.css";

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

                <Box component="main" className='box-container'>
                    <Box className='box-sub-container'>
                        <Grid container columnSpacing={10}>
                            <Grid item xs={6}>
                                <Button variant="contained" className='new-meeting-button' onClick={() => newMeeting()}>
                                    New Meetings
                                </Button>

                                <Typography className='page-topic'>
                                    Meeting Notes
                                </Typography>

                                <Grid container columnSpacing={5}>
                                    <Grid item xs={6}>
                                        <Typography className='field-label'>
                                            Project
                                        </Typography>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            onChange={handleChange}
                                            className='field'
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography className='field-label'>
                                            Date
                                        </Typography>
                                        <TextField
                                            id="outlined-basic"
                                            variant="outlined"
                                            type="date"
                                            // value={date}
                                            // onChange={(e) => setDate(e.target.value)}
                                            className='field'
                                        />
                                    </Grid>
                                </Grid>

                                <Button variant="contained" className='form-button'>
                                    Search
                                </Button>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography className='page-topic'>
                                    Upcoming Meetings
                                </Typography>

                                <Box className='meeting-container'>
                                    <Link className='meeting-link' to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Upcoming Meetings- 000000001
                                    </Link>
                                    <Link className='meeting-link' to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Upcoming Meetings- 000000002
                                    </Link>
                                    <Link className='meeting-link' to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Upcoming Meetings- 000000003
                                    </Link>
                                    <Link className='meeting-link' to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Upcoming Meetings- 000000004
                                    </Link>
                                </Box>

                                <Typography style={{ marginTop: "30px" }} className='page-topic'>
                                    Previous Meetings
                                </Typography>

                                <Box className='meeting-container'>
                                    <Link className='meeting-link' to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Previous Meetings- 000000001
                                    </Link>
                                    <Link className='meeting-link' to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Previous Meetings- 000000002
                                    </Link>
                                    <Link className='meeting-link' to="/JoinMeetings">
                                        <CircleIcon style={{ fontSize: "13px" }} />
                                        Previous Meetings- 000000003
                                    </Link>
                                    <Link className='meeting-link' to="/JoinMeetings">
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