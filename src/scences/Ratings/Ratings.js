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
import { rating, getProjects } from '../../api';
import Swal from 'sweetalert2';
import "../../styles/MainStyles.css";
import "../../styles/Ratings.css";

const Ratings = () => {

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [projectId, setProjectId] = useState("");
    const [projects, setProjects] = useState({});
    const [errors, seterrors] = useState([]);

    useEffect(() => {
        getProjects()
            .then((res) => {
                if (res.status === 200) {
                    setProjects(res.data);
                } else {
                    console.log(res.data);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const validate = () => {
        let errors = {};

        // rating
        if (!rating) {
            errors.rating = 'Rating required';
        }

        // comment
        if (!comment) {
            errors.comment = 'Comment required';
        }

        return errors;
    };

    const submitRating = (e) => {
        e.preventDefault();
        const isValid = validate();

        if (isValid.rating || isValid.comment) {
            seterrors(isValid);
        } else {
            rating(
                {
                    recieverId: 0,
                    senderId: 0,
                    innovativeID: 2,
                    rate: rating,
                    comment: comment,
                }
            )
                .then((res) => {
                    if (res.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            text: 'Successfully added rate!',
                            timer: 3000,
                            confirmButtonColor: '#024b77',
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: 'Failed to add rate!',
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
                            Project Ratings
                        </Typography>

                        {/* {console.log(projects.length)} */}
                        <Grid container className='button-container'>
                            {/* {
                                projects.length !== 0 ? projects.map((project) => (
                                    <Grid item xs={2} key={project.id}>
                                        <Button variant="contained" className='project-buttons'>
                                            {project.name}
                                        </Button>
                                    </Grid>
                                )) : null
                            } */}
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
                                            value={rating}
                                            onChange={(event, newValue) => {
                                                setRating(newValue);
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <input
                                            type="text"
                                            className='comment-field'
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            multiline="true"
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