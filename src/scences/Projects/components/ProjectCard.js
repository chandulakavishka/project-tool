import React, { useEffect, useState } from 'react';
import { Typography, Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Divider from '@mui/material/Divider';

const ProjectCard = () => {

    return (
        <>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <Stack direction="row" style={{ alignItems: "center", justifyContent: "space-between" }}>
                            <Typography>
                                Project Title goes here
                            </Typography>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <CreateIcon />
                                <MoreVertIcon />
                            </div>
                        </Stack>

                        <Stack direction="row" style={{ justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                            <div>
                                <label>
                                    Start Date
                                </label>
                                <Typography>
                                    12 Sep 2023
                                </Typography>
                            </div>

                            <div>
                                <label>
                                    Status
                                </label>
                                <Typography>
                                    <FiberManualRecordIcon style={{ fontSize: "15px" }} />
                                    Active
                                </Typography>
                            </div>

                            <div style={{ display: "flex", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
                                <div style={{ padding: "5px 10px" }}>
                                    <Typography>
                                        13
                                    </Typography>
                                    <label>
                                        Tasks
                                    </label>
                                </div>

                                <Divider orientation="vertical" variant="middle" flexItem />

                                <div style={{ padding: "5px 10px" }}>
                                    <Typography>
                                        4
                                    </Typography>
                                    <label>
                                        Users
                                    </label>
                                </div>
                            </div>
                        </Stack>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Members
                        </Typography><Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Progress
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            be
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            be
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            be
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            be
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <Typography>
                            Project Title goes here
                        </Typography>
                        <Typography variant="h5" component="div">
                            be
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default ProjectCard