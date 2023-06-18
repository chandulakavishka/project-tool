import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select } from '@mui/material';
import NavBar from '../../../components/NavBar/NavBar';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../styles/MainStyles.css";
import "../../../styles/Meetings.css";

const JoinMeetings = () => {

    const [age, setAge] = React.useState('');

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
                        <Typography style={{ marginTop: "20px" }} className='page-topic'>
                            Join Meetings
                        </Typography>

                        <Grid container>
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

                        {/* <Editor
                            // editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                        // onEditorStateChange={this.onEditorStateChange}
                        /> */}
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default JoinMeetings