import React, { useEffect, useState } from 'react';
import { Typography, Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Divider from '@mui/material/Divider';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

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
                                <Typography style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <FiberManualRecordIcon style={{ fontSize: "14px" }} />
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

                        <Typography color="text.secondary" style={{ marginTop: "10px" }}>
                            Members
                        </Typography>


                        {/* <img
                            src={car}
                        // alt="this is car image"
                        /> */}

                        <Stack direction="row" style={{ alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                            <Typography color="text.secondary">
                                Progress
                            </Typography>
                            <Typography color="text.secondary">
                                7%
                            </Typography>
                        </Stack>

                        <BorderLinearProgress variant="determinate" value={50} />
                    </CardContent>
                </Card>
            </Grid>

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
                                <Typography style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <FiberManualRecordIcon style={{ fontSize: "14px" }} />
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

                        <Typography color="text.secondary" style={{ marginTop: "10px" }}>
                            Members
                        </Typography>


                        {/* <img
                            src={car}
                        // alt="this is car image"
                        /> */}

                        <Stack direction="row" style={{ alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                            <Typography color="text.secondary">
                                Progress
                            </Typography>
                            <Typography color="text.secondary">
                                7%
                            </Typography>
                        </Stack>

                        <BorderLinearProgress variant="determinate" value={50} />
                    </CardContent>
                </Card>
            </Grid>

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
                                <Typography style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <FiberManualRecordIcon style={{ fontSize: "14px" }} />
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

                        <Typography color="text.secondary" style={{ marginTop: "10px" }}>
                            Members
                        </Typography>


                        {/* <img
                            src={car}
                        // alt="this is car image"
                        /> */}

                        <Stack direction="row" style={{ alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                            <Typography color="text.secondary">
                                Progress
                            </Typography>
                            <Typography color="text.secondary">
                                7%
                            </Typography>
                        </Stack>

                        <BorderLinearProgress variant="determinate" value={50} />
                    </CardContent>
                </Card>
            </Grid>

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
                                <Typography style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <FiberManualRecordIcon style={{ fontSize: "14px" }} />
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

                        <Typography color="text.secondary" style={{ marginTop: "10px" }}>
                            Members
                        </Typography>


                        {/* <img
                            src={car}
                        // alt="this is car image"
                        /> */}

                        <Stack direction="row" style={{ alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                            <Typography color="text.secondary">
                                Progress
                            </Typography>
                            <Typography color="text.secondary">
                                7%
                            </Typography>
                        </Stack>

                        <BorderLinearProgress variant="determinate" value={50} />
                    </CardContent>
                </Card>
            </Grid>

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
                                <Typography style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <FiberManualRecordIcon style={{ fontSize: "14px" }} />
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

                        <Typography color="text.secondary" style={{ marginTop: "10px" }}>
                            Members
                        </Typography>


                        {/* <img
                            src={car}
                        // alt="this is car image"
                        /> */}

                        <Stack direction="row" style={{ alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                            <Typography color="text.secondary">
                                Progress
                            </Typography>
                            <Typography color="text.secondary">
                                7%
                            </Typography>
                        </Stack>

                        <BorderLinearProgress variant="determinate" value={50} />
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default ProjectCard