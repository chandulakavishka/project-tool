import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select, TextField } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import { getMeetings, getProjects, getInnovativesByProjectId } from '../../api';
import "../../styles/MainStyles.css";
import "../../styles/Meetings.css";

const Meetings = () => {
    const navigate = useNavigate();

    const [innovativeId, setInnovativeId] = React.useState('');
    const [projectId, setProjectId] = React.useState('');
    
    const [meetings, setMeetings] = useState([]);
    const [upcomingMeetings, setUpcomingMeetings] = useState([]);
    const [previousMeetings, setPreviousMeetings] = useState([]);
    const [filterMeetings, setFilterMeetings] = useState([]);
    const [projects, setProjects] = useState([]);
    const [innovatives, setInnovatives] = useState([]);
    const [errors, seterrors] = useState({});

    const validate = () => {
        let errors = {};

        // innovativeId
        if (!innovativeId) {
            errors.innovativeId = 'Innovative Id required';
        }

        // projectId
        if (!projectId) {
            errors.projectId = 'Project required';
        }

        return errors;
    };

    useEffect(() => {
        getMeetings()
            .then((res) => {
                if (res.status === 200) {
                    setMeetings(res.data);
                    setUpcomingMeetings(res.data.filter(meeting => new Date(meeting.date) - new Date() >= 0));
                    setPreviousMeetings(res.data.filter(meeting => new Date(meeting.date) - new Date() < 0));
                } else {
                    console.log(res.data);
                }
            })
            .catch((e) => {
                console.log(e);
            });

        getProjects()
            .then((res) => {
                if (res.status === 200) {
                    setProjects(res.data);
                } else {
                    console.log(res.data);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    useEffect(() => {
        if (projectId !== null) {
            getInnovativesByProjectId(projectId)
                .then((res) => {
                    if (res.status === 200) {
                        setInnovatives(res.data);
                    } else {
                        console.log(res.data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [projectId]);

    const newMeeting = () => {
        navigate("/NewMeeting")
    }

    const searchMeetingNotes = (e) => {
        e.preventDefault();
        const isValid = validate();

        if (isValid.innovativeId || isValid.projectId) {
            seterrors(isValid);
        } else {
            // let filterData = [];
            // for (let i = 0; i < meetings.length; i++) {
            //     if ((parseInt(meetings[i].projectId) === parseInt(projectId)) && (parseInt(meetings[i].innovativeId) === parseInt(innovativeId))) {
            //         filterData.push(meetings[i]);
            //     }
            // }
            // setFilterMeetings(filterData);

            setFilterMeetings(meetings.filter((meeting) => {return meeting.innovativeId == innovativeId && meeting.projectId == projectId}));
        }
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
                                            value={projectId}
                                            onChange={(e) => {
                                                setProjectId(e.target.value);
                                                setInnovativeId('');
                                                seterrors({ ...errors, projectId: '' });
                                            }}
                                            className='field'
                                        >
                                            {
                                                projects && projects.map((project) => (
                                                    <MenuItem key={project.projectId} value={project.projectId}>{project.projectName}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography className='field-label'>
                                            Innovative
                                        </Typography>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={innovativeId}
                                            onChange={(e) => {
                                                setInnovativeId(e.target.value);
                                                seterrors({ ...errors, innovativeId: '' });
                                            }}
                                            className="field"
                                        >
                                            {
                                                innovatives && innovatives.map((innovative) => (
                                                    <MenuItem key={innovative.id} value={innovative.id}>{innovative.innovativeName}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </Grid>
                                </Grid>

                                <Button variant="contained" className='form-button' onClick={searchMeetingNotes}>
                                    Search
                                </Button>

                                <di>
                                    {
                                        filterMeetings && filterMeetings.map((filter) => (
                                            <>
                                            <h6>{filter.title}</h6>
                                            <p>{filter.note}</p>
                                            </>
                                        ))
                                    }
                                </di>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography className='page-topic'>
                                    Upcoming Meetings
                                </Typography>

                                <Box className='meeting-container'>
                                    {
                                        upcomingMeetings && upcomingMeetings.map((meeting) => (
                                            <Link key={meeting.id} className='meeting-link' to="/JoinMeetings" state={{ meeting: meeting}}>
                                                <CircleIcon style={{ fontSize: "13px" }} />
                                                {meeting.title}
                                            </Link>
                                        ))
                                    }
                                </Box>

                                <Typography style={{ marginTop: "30px" }} className='page-topic'>
                                    Previous Meetings
                                </Typography>

                                <Box className='meeting-container'>
                                    {
                                        previousMeetings && previousMeetings.map((meeting) => (
                                            <Link key={meeting.id} className='meeting-link' to="/JoinMeetings" state={{ meeting: meeting}}>
                                                <CircleIcon style={{ fontSize: "13px" }} />
                                                {meeting.title}
                                            </Link>
                                        ))
                                    }
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