import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select, TextField } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import { sharePoint, getInnovativesByProjectId, getProjects } from '../../api';
import Swal from 'sweetalert2';
import "../../styles/MainStyles.css";
import "../../styles/Meetings.css";
import "../../styles/SharePoints.css";

const SharePoints = () => {


    const [points, setPoints] = useState();



    const [innovativeId, setInnovativeId] = React.useState('');
    const [projectId, setProjectId] = React.useState('');

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

    const submitPoints = (e) => {
        // e.preventDefault();
        // const isValid = validate();

        // if (isValid.name || isValid.email || isValid.mobile || isValid.incharge_of) {
        //     seterrors(isValid);
        // } else {
        sharePoint(
            {
                recieverId: 0,
                senderId: 0,
                innovativeID: 2,
                point: points,
            }
        )
            .then((res) => {
                if (!res.data.error) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Successfully added points!',
                        timer: 3000,
                        confirmButtonColor: '#024b77',
                    });
                } else {
                    console.log(res.data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        // }
    };

    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />

                <NavBar />

                <Box component="main" className='box-container'>
                    <Box className='box-sub-container'>
                        <Typography style={{ marginTop: "20px" }} className='page-topic'>
                            New Year Celebration
                        </Typography>

                        <Grid container columnSpacing={10}>
                            <Grid item xs={6}>
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

                                <Button
                                    variant="contained"
                                    className='form-button'
                                // onClick={searchMeetingNotes}
                                >
                                    Search
                                </Button>

                                <Box className='share-points-text'>
                                    Share Points
                                </Box>

                                <Box>
                                    <Box className='share-points-box'>
                                        Thilini Wijekoon
                                        <input
                                            type="number"
                                            className='share-points-input'
                                            value={points}
                                            onChange={(e) => setPoints(e.target.value)}
                                        />
                                    </Box>
                                </Box>

                                <Box className='button-container'>
                                    <Button
                                        variant="outlined" className='form-button'
                                        onClick={() => setPoints(0)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="contained" className='form-button'
                                        onClick={submitPoints}
                                    >
                                        Create
                                    </Button>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box className='rate-text'>
                                    <div>Top Contributors</div>
                                    <div>Rate</div>
                                </Box>

                                <Box className='rate-text'>
                                    <Typography style={{ fontSize: "16px" }}>
                                        Thilini Wijekoon
                                    </Typography>
                                    <Typography style={{ fontSize: "16px" }}>
                                        4.5 / 5
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default SharePoints