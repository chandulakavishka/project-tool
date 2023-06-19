import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select } from '@mui/material';
import NavBar from '../../../components/NavBar/NavBar';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../styles/MainStyles.css";
import "../../../styles/Meetings.css";
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

const JoinMeetings = (props) => {
    const { state } = useLocation();

    // console.log("FFFFFFFFFFFFF", state.meetingId)

    const [age, setAge] = React.useState('');
    const [note, setNote] = React.useState('');
    const [errors, seterrors] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    var postData = {
        // title: title,
        // innovativeId: innovativeId,
        note: note,
        meetingId: state.meetingId,
    };

    const createMeetingNote = () => {
        if (note !== '') {
            seterrors("Note required");
        } else {
            createMeetingNote(postData)
                .then((res) => {
                    if (res.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            text: 'Successfully created meeting note!',
                            timer: 3000,
                            confirmButtonColor: '#024b77',
                        });
                        // setValues();
                    } else {
                        Swal.fire({
                            icon: 'failed',
                            text: 'Failed to create meeting note!',
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
                            Join Meetings
                        </Typography>

                        <Grid container style={{ marginBottom: "20px" }}>
                            <Grid item xs={2}>
                                <Typography className='meeting-details'>
                                    Innovative
                                </Typography>
                                <Typography className='meeting-details'>
                                    Title
                                </Typography>
                                <Typography className='meeting-details'>
                                    Link
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography className='meeting-details'>
                                    :
                                </Typography>
                                <Typography className='meeting-details'>
                                    :
                                </Typography>
                                <Typography className='meeting-details'>
                                    :
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography className='meeting-details'>
                                    Innovative Title
                                </Typography>
                                <Typography className='meeting-details'>
                                    Meeting Title
                                </Typography>
                                <Typography className='meeting-details'>
                                    hbsdbkhqerfqe5rfwe\f5rwefwef5\wqefefefef7q7ef67e6f7efqef7q68ef7q6e7f6e7f6e7f67ef6fjg
                                </Typography>
                            </Grid>
                        </Grid>

                        <Editor
                            editorState={note}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={(e) => setNote(e.target.value)}
                            editorStyle={{ height: "200px", backgroundColor: "#FFFFFF", border: "1px", borderColor: "#000000" }}
                        />

                        <Box className='button-container'>
                            <Button variant="outlined" className='form-button'>
                                Cancel
                            </Button>
                            <Button variant="outlined" onClick={createMeetingNote} className='form-button'>
                                Create
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default JoinMeetings