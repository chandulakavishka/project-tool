import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select } from '@mui/material';
import NavBar from '../../../components/NavBar/NavBar';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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

                <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', padding: '70px 20px 10px 20px', minHeight: "730px" }}>
                    <Box sx={{ flexGrow: 1, margin: "20px 30px" }}>
                        <Typography style={{ margin: "20px 0px", fontSize: "30px" }}>
                            Join Meetings
                        </Typography>

                        <Grid container>
                            <Grid item xs={2}>
                                <Typography style={{ marginTop: "20px", fontSize: "17px" }}>
                                    Innovative
                                </Typography>
                                <Typography style={{ marginTop: "20px", fontSize: "17px" }}>
                                    Title
                                </Typography>
                                <Typography style={{ marginTop: "20px", fontSize: "17px" }}>
                                    Link
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography style={{ marginTop: "20px", fontSize: "17px" }}>
                                    :
                                </Typography>
                                <Typography style={{ marginTop: "20px", fontSize: "17px" }}>
                                    :
                                </Typography>
                                <Typography style={{ marginTop: "20px", fontSize: "17px" }}>
                                    :
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography style={{ marginTop: "20px", fontSize: "17px" }}>
                                    Innovative Title
                                </Typography>
                                <Typography style={{ marginTop: "20px", fontSize: "17px" }}>
                                    Meeting Title
                                </Typography>
                                <Typography style={{ marginTop: "20px", fontSize: "17px" }}>
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