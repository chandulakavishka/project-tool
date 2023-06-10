import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select, TextField } from '@mui/material';
import NavBar from '../../../components/NavBar/NavBar';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { createMeeting } from '../../../api/index';
import Swal from 'sweetalert2';

const NewMeetings = () => {

    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState();
    const [time, setTime] = React.useState();
    const [innovativeId, setInnovativeId] = React.useState('');

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
    };

    const createNewMeeting = (e) => {
        // e.preventDefault();
        // const isValid = validate();

        // if (isValid.name || isValid.email || isValid.mobile || isValid.incharge_of) {
        //     seterrors(isValid);
        // } else {
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
        // }
    };

    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />

                <NavBar />

                <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', padding: '70px 20px 10px 20px', minHeight: "730px" }}>
                    <Box sx={{ flexGrow: 1, margin: "20px 30px" }}>
                        <Typography style={{ marginTop: "20px", fontSize: "30px" }}>
                            New Meetings
                        </Typography>


                        <Box>
                            <Grid container columnSpacing={10} style={{ marginTop: "10px" }}>
                                <Grid item xs={6}>
                                    <Typography style={{ marginTop: "20px", marginBottom: "5px", fontSize: "18px" }}>
                                        Innovative
                                    </Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={innovativeId}
                                        onChange={(e) => setInnovativeId(e.target.value)}
                                        style={{ width: "100%" }}
                                    >
                                        <MenuItem value={1}>Innovative 1</MenuItem>
                                        <MenuItem value={2}>Innovative 2</MenuItem>
                                        <MenuItem value={3}>Innovative 3</MenuItem>
                                    </Select>

                                    <Typography style={{ marginTop: "20px", marginBottom: "5px", fontSize: "18px" }}>
                                        Date
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        type="date"
                                        value={date}
                                        style={{ width: "100%" }}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography style={{ marginTop: "20px", marginBottom: "5px", fontSize: "18px" }}>
                                        Title
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        type="text"
                                        value={title}
                                        style={{ width: "100%" }}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />

                                    <Typography style={{ marginTop: "20px", marginBottom: "5px", fontSize: "18px" }}>
                                        Time
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        type="time"
                                        value={time}
                                        style={{ width: "100%" }}
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                </Grid>
                            </Grid>


                            <Typography style={{ marginTop: "20px", marginBottom: "5px", fontSize: "18px" }}>
                                Link
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type="text"
                                value={link}
                                style={{ width: "100%" }}
                                onChange={(e) => setLink(e.target.value)}
                            />


                            <Typography style={{ marginTop: "20px", marginBottom: "5px", fontSize: "18px" }}>
                                Description
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type="text"
                                sx={{ width: "100%" }}
                                multiline
                                value={description}
                                rows={3}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Box>

                        <Box style={{ float: "right", marginTop: "25px" }}>
                            <Button
                                variant="outlined"
                                style={{ width: "160px", height: "50px", borderRadius: "5px", textTransform: 'none', marginRight: "20px", fontSize: "16px" }}
                                onClick={setValues}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                style={{ width: "160px", height: "50px", borderRadius: "5px", textTransform: 'none', fontSize: "16px" }}
                                onClick={createNewMeeting}
                            >
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