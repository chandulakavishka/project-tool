import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, TextField, Select } from '@mui/material';
import NavBar from '../../../components/NavBar/NavBar';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../styles/MainStyles.css";
import "../../../styles/Meetings.css";
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import { createMeetingNote } from '../../../api';

const JoinMeetings = () => {
    const { state } = useLocation();
    const meetingDetails = state.meeting;

    const [note, setNote] = React.useState('');
    const [noteError, setNoteError] = useState('');

    var postData = {
        title: meetingDetails.title,
        date: new Date(),
        innovativeId: meetingDetails.innovativeId,
        note: note,
        meetingId: meetingDetails.id,
        projectId: meetingDetails.projectId,
    };

    const submitMeetingNote = () => {
        if (note === '') {
            setNoteError("Note required");
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
                                <Typography className='meeting-details'>
                                    Note
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
                                <Typography className='meeting-details'>
                                    :
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography className='meeting-details'>
                                    {meetingDetails.innovativeName}
                                </Typography>
                                <Typography className='meeting-details'>
                                    {meetingDetails.title}
                                </Typography>
                                <Typography className='meeting-details'>
                                    {meetingDetails.link}
                                </Typography>
                                {
                                    meetingDetails.note === '' ?
                                    <>
                                        <TextField
                                            id="outlined-basic"
                                            variant="outlined"
                                            type="text"
                                            className='field'
                                            style={{marginTop: "20px"}}
                                            multiline
                                            value={note}
                                            rows={3}
                                            onChange={(e) => {
                                                setNote(e.target.value);
                                                setNoteError('');
                                            }}
                                        />
                                        {noteError && (
                                            <p style={{ color: 'rgb(208, 0, 0)' }}>{noteError}</p>
                                        )}
                                    </>
                                    :
                                    <Typography className='meeting-details'>
                                        {meetingDetails.note}
                                    </Typography>
                                }
                            </Grid>
                        </Grid>

                        {/* <Editor
                            editorState={note}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={(e) => setNote(e.target.value)}
                            editorStyle={{ height: "200px", backgroundColor: "#FFFFFF", border: "1px", borderColor: "#000000" }}
                        /> */}

                            {
                                meetingDetails.note === "" ?
                                    <Box className='button-container'>
                                        <Button variant="outlined" className='form-button' onClick={() => {setNote(''); setNoteError('');}}>
                                            Cancel
                                        </Button>
                                        <Button variant="contained" onClick={submitMeetingNote} className='form-button'>
                                            Add Meeting Note
                                        </Button>
                                    </Box>
                                    : null
                            }
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default JoinMeetings