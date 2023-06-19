import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select, TextField } from '@mui/material';
import NavBar from '../../../components/NavBar/NavBar';
import { createMeeting, getProjects, getInnovativesByProjectId } from '../../../api/index';
import Swal from 'sweetalert2';
import "../../../styles/MainStyles.css";
import "../../../styles/Meetings.css";

const NewMeetings = () => {

    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [dateTime, setDateTime] = React.useState('');
    const [innovativeId, setInnovativeId] = React.useState('');
    const [projectId, setProjectId] = React.useState('');
    const [errors, seterrors] = useState({});
    const [projects, setProjects] = useState([]);
    const [innovatives, setInnovatives] = useState([]);

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

    var postData = {
        title: title,
        link: link,
        description: description,
        date: dateTime,
        innovativeId: innovativeId,
        projectId: projectId,
    };

    const setValues = () => {
        setTitle('');
        setLink('');
        setDescription('');
        setDateTime('');
        setInnovativeId('');
        setProjectId('');
        seterrors('');
    };

    const validate = () => {
        let errors = {};

        // title
        if (!title) {
            errors.title = 'Title required';
        }

        // link
        if (!link) {
            errors.link = 'Link required';
        }

        // description
        if (!description) {
            errors.description = 'Description required';
        }

        // date & time
        if (!dateTime) {
            errors.dateTime = 'Date & Time required';
        }

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

    const createNewMeeting = (e) => {
        e.preventDefault();
        const isValid = validate();

        if (isValid.title || isValid.link || isValid.description || isValid.dateTime || isValid.innovativeId || isValid.projectId) {
            seterrors(isValid);
        } else {
            createMeeting(postData)
                .then((res) => {
                    if (res.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            text: 'Successfully created new meeting!',
                            timer: 3000,
                            confirmButtonColor: '#024b77',
                        });
                        setValues();
                    } else {
                        Swal.fire({
                            icon: 'failed',
                            text: 'Failed to create new meeting!',
                            timer: 3000,
                            confirmButtonColor: '#024b77',
                        });
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />

                <NavBar />

                <Box component="main" className='box-container'>
                    <Box className='box-sub-container'>
                        <Typography style={{ marginTop: "20px" }} className='page-topic'>
                            New Meetings
                        </Typography>

                        <Box>
                            <Grid container columnSpacing={10}>
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
                                    {errors.projectId && (
                                        <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.projectId}</p>
                                    )}

                                    <Typography className='field-label'>
                                        Title
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        type="text"
                                        value={title}
                                        className='field'
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                            seterrors({ ...errors, title: '' });
                                        }}
                                    />
                                    {errors.title && (
                                        <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.title}</p>
                                    )}
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
                                        className='field'
                                    >
                                        {
                                        innovatives && innovatives.map((innovative) => (
                                                <MenuItem key={innovative.id} value={innovative.id}>{innovative.innovativeName}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                    {errors.innovativeId && (
                                        <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.innovativeId}</p>
                                    )}

                                    <Typography className='field-label'>
                                        Date & Time
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        type="datetime-local"
                                        value={dateTime}
                                        className='field'
                                        onChange={(e) => {
                                            setDateTime(e.target.value);
                                            seterrors({ ...errors, dateTime: '' });
                                        }}
                                    />
                                    {errors.dateTime && (
                                        <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.dateTime}</p>
                                    )}
                                </Grid>
                            </Grid>

                            <Typography className='field-label'>
                                Link
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type="text"
                                value={link}
                                className='field'
                                onChange={(e) => {
                                    setLink(e.target.value);
                                    seterrors({ ...errors, link: '' });
                                }}
                            />
                            {errors.link && (
                                <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.link}</p>
                            )}

                            <Typography className='field-label'>
                                Description
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type="text"
                                className='field'
                                multiline
                                value={description}
                                rows={3}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                    seterrors({ ...errors, description: '' });
                                }}
                            />
                            {errors.description && (
                                <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.description}</p>
                            )}
                        </Box>

                        <Box className='button-container'>
                            <Button variant="outlined" onClick={setValues} className='form-button'>
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={createNewMeeting} className='form-button'>
                                Create
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default NewMeetings