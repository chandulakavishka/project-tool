import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select, TextField } from '@mui/material';
import NavBar from '../../../components/NavBar/NavBar';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { createMeeting } from '../../../api/index';
import Swal from 'sweetalert2';
import "../../../styles/MainStyles.css";
import "../../../styles/Meetings.css";

const NewMeetings = () => {

    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState();
    const [time, setTime] = React.useState();
    const [innovativeId, setInnovativeId] = React.useState('');
    const [errors, seterrors] = useState({});

    var postData = {
        title: title,
        link: link,
        description: description,
        date: date,
        time: time,
        innovativeId: innovativeId,
    };

    const setValues = () => {
        setTitle('');
        setLink('');
        setDescription('');
        setDate('');
        setTime('');
        setInnovativeId('');
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

        // date
        if (!date) {
            errors.date = 'Date required';
        }

        // time
        if (!time) {
            errors.time = 'Time required';
        }

        // innovativeId
        if (!innovativeId) {
            errors.innovativeId = 'Innovative Id required';
        }

        return errors;
    };

    const createNewMeeting = (e) => {
        e.preventDefault();
        const isValid = validate();

        if (isValid.title || isValid.link || isValid.description || isValid.date || isValid.time || isValid.innovativeId) {
            seterrors(isValid);
        } else {
            createMeeting(postData)
                .then((res) => {
                    if (!res.data.error) {
                        Swal.fire({
                            icon: 'success',
                            text: 'Successfully created new meeting!',
                            timer: 3000,
                            confirmButtonColor: '#024b77',
                        });
                        setValues();
                    } else {
                        console.log(res.data.message);
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
                                        <MenuItem value={1}>Innovative 1</MenuItem>
                                        <MenuItem value={2}>Innovative 2</MenuItem>
                                        <MenuItem value={3}>Innovative 3</MenuItem>
                                    </Select>
                                    {errors.innovativeId && (
                                        <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.innovativeId}</p>
                                    )}

                                    <Typography className='field-label'>
                                        Date
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        type="date"
                                        value={date}
                                        className='field'
                                        onChange={(e) => {
                                            setDate(e.target.value);
                                            seterrors({ ...errors, date: '' });
                                        }}
                                    />
                                    {errors.date && (
                                        <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.date}</p>
                                    )}
                                </Grid>

                                <Grid item xs={6}>
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

                                    <Typography className='field-label'>
                                        Time
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        type="time"
                                        value={time}
                                        className='field'
                                        onChange={(e) => {
                                            setTime(e.target.value);
                                            seterrors({ ...errors, time: '' });
                                        }}
                                    />

                                    {errors.time && (
                                        <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.time}</p>
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
                            <Button variant="outlined" onClick={createNewMeeting} className='form-button'>
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