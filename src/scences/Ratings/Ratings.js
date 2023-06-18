import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip, Select } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { rating } from '../../api';
import Swal from 'sweetalert2';
import "../../styles/MainStyles.css";
import "../../styles/Ratings.css";

const Ratings = () => {

    const [value, setValue] = useState(2);
    const [comment, setComment] = useState("");

    const submitRating = (e) => {
        // e.preventDefault();
        // const isValid = validate();

        // if (isValid.name || isValid.email || isValid.mobile || isValid.incharge_of) {
        //     seterrors(isValid);
        // } else {
        rating(
            {
                recieverId: 0,
                senderId: 0,
                innovativeID: 2,
                rate: value,
                comment: comment,
                // date: 
            }
        )
            .then((res) => {
                if (!res.data.error) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Successfully added rate!',
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

                <Box component="main" className='box-container'>
                    <Box className='box-sub-container'>
                        <Typography style={{ marginTop: "20px" }} className='page-topic'>
                            Project Ratings
                        </Typography>

                        <Grid container className='button-container'>
                            <Grid item xs={2}>
                                <Button variant="contained" className='project-buttons'>
                                    Project 01
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="outlined" className='project-buttons'>
                                    Project 02
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="outlined" className='project-buttons'>
                                    Project 03
                                </Button>
                            </Grid>
                        </Grid>

                        <Divider orientation="horizontal" className='divider' />

                        <Typography className='sub-topic'>
                            Top Contributors
                        </Typography>

                        <Table aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                {/* {rows.map((row) => ( */}
                                <TableRow
                                // key={row.name}
                                >
                                    <TableCell component="th" scope="row">
                                        Thilini
                                    </TableCell>
                                    <TableCell align="center">
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <input
                                            type="text"
                                            className='comment-field'
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            multiline
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <div className='icon-container'>
                                            <div onClick={submitRating}><CheckBoxIcon /></div>
                                            <EditIcon />
                                            <DeleteIcon />
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                // key={row.name}
                                >
                                    <TableCell component="th" scope="row">
                                        Thilini
                                    </TableCell>
                                    <TableCell align="center">
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <input
                                            type="text"
                                            className='comment-field'
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            multiline
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <div className='icon-container'>
                                            <div onClick={submitRating}><CheckBoxIcon /></div>
                                            <EditIcon />
                                            <DeleteIcon />
                                        </div>
                                    </TableCell>
                                </TableRow>
                                {/* ))} */}
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default Ratings