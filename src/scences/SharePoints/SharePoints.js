import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select, TextField } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import { sharePoint } from '../../api';
import Swal from 'sweetalert2';

const SharePoints = () => {


    const [points, setPoints] = useState();

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

                <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', padding: '70px 20px 10px 20px', minHeight: "730px" }}>
                    <Box sx={{ flexGrow: 1, margin: "20px 30px" }}>
                        <Typography style={{ fontSize: "30px" }}>
                            New Year Celebration
                        </Typography>

                        <Grid container columnSpacing={20} style={{ marginTop: "30px" }}>
                            <Grid item xs={6}>
                                <Box style={{ marginBottom: "20px", display: "flex", justifyContent: "end" }}>
                                    <Typography style={{ fontSize: "16px" }}>
                                        Share Points
                                    </Typography>
                                </Box>

                                <Box>
                                    <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                                        <Typography style={{ fontSize: "16px" }}>
                                            Thilini Wijekoon
                                        </Typography>
                                        <input
                                            type="text"
                                            style={{ width: "60px", height: "30px" }}
                                            value={points}
                                            onChange={(e) => setPoints(e.target.value)}
                                        />
                                    </Box>

                                    <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                                        <Typography style={{ fontSize: "16px" }}>
                                            Thilini Wijekoon
                                        </Typography>
                                        <input
                                            type="text"
                                            style={{ width: "60px", height: "30px" }}

                                        />
                                    </Box>

                                    <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                                        <Typography style={{ fontSize: "16px" }}>
                                            Thilini Wijekoon
                                        </Typography>
                                        <input
                                            type="text"
                                            style={{ width: "60px", height: "30px" }}

                                        />
                                    </Box>
                                </Box>

                                <Box style={{ float: "right", marginTop: "25px" }}>
                                    <Button
                                        variant="outlined"
                                        style={{ width: "160px", height: "50px", borderRadius: "5px", textTransform: 'none', marginRight: "20px", fontSize: "16px" }}
                                        onClick={() => setPoints(0)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="contained"
                                        style={{ width: "160px", height: "50px", borderRadius: "5px", textTransform: 'none', fontSize: "16px" }}
                                        onClick={submitPoints}
                                    >
                                        Create
                                    </Button>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                                    <Typography style={{ fontSize: "16px" }}>
                                        Top Contributors
                                    </Typography>
                                    <Typography style={{ fontSize: "16px" }}>
                                        Rate
                                    </Typography>
                                </Box>

                                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                                    <Typography style={{ fontSize: "16px" }}>
                                        Thilini Wijekoon
                                    </Typography>
                                    <Typography style={{ fontSize: "16px" }}>
                                        4.5 / 5
                                    </Typography>
                                </Box>

                                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
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