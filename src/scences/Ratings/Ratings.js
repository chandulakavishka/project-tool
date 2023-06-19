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
import { rating, getProjects, getRatingByProjectId } from '../../api';
import Swal from 'sweetalert2';
import "../../styles/MainStyles.css";
import "../../styles/Ratings.css";

const Ratings = () => {

    const [rate, setRate] = useState(0);
    const [comment, setComment] = useState("");
    const [projectId, setProjectId] = useState(1);
    const [projects, setProjects] = useState([]);
    const [ratingList, setRatingList] = useState([]);
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

    useEffect(() => {
        getRatingByProjectId(projectId)
            .then((res) => {
                if (res.status === 200) {
                    setRatingList(res.data);
                } else {
                    console.log(res.data);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, [projectId]);

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

    const submitRating = (rating) => {
            rating(
                {
                    recieverId: rating.recieverId,
                    senderId: 1,
                    rate: rate,
                    comment: comment,
                    projectId: rating.projectId,
                    date: new Date(),
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
                            {
                                projects && projects.map((project) => (
                                    <Grid item xs={2} key={project.projectId}>
                                        <Button
                                            variant={projectId === project.projectId ? "contained" : "outlined"}
                                            className='project-buttons'
                                            onClick={() => {setProjectId(project.projectId);}}
                                        >
                                            {project.projectName}
                                        </Button>
                                    </Grid>
                                ))
                            }
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
                                    <TableCell></TableCell>
                                </TableRow>
                                {
                                    ratingList && ratingList.map((rating) => (
                                        <TableRow key={rating.recieverId}>
                                            <TableCell component="th" scope="row">
                                                {rating.name}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {rating.avgRate}/5
                                            </TableCell>
                                            <TableCell align="center">
                                                <Rating
                                                    name="simple-controlled"
                                                    value={rate}
                                                    onChange={(event, newValue) => {
                                                        setRate(newValue);
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
                                                    <div onClick={() => submitRating(rating)}><CheckBoxIcon /></div>
                                                    <DeleteIcon />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default Ratings