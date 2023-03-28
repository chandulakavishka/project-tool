import React from "react";
import CommentSection from "../comment-component/Comments"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Link,
  Grid,
  Stack,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Autocomplete from "@mui/material/Autocomplete";
import LinearProgress from '@mui/material/LinearProgress';
import InputAdornment from "@mui/material/InputAdornment";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import "./page.css";

const Page = () => {
  const[commentOpen,setCommentOpen] = useState(true)
  const[taskId,setTaskId] = useState();
  const [taskName,setTaskName] = useState("");
  const [dueDate,setDueDate] = useState();
  const [backendComments, setBackendComments] = useState([]);
  const [open, setOpen] = useState(false);
  const [isViewComment, setIsViewComment] = useState(false);

  
  const handleClose = () => {
    setOpen(false);
  };
  const handleCreateTask = () => {
    setOpen(true);
  };
  const viewComment = (TaskId) =>{
    setIsViewComment(true);
    setCommentOpen(true);
    setTaskId(TaskId)
  }  

  const addTask = (e) => {
    e.preventDefault();
  const data = {
    innovativeId: 1,
    taskName: taskName,
    dueDate: dueDate
  };
  const url = "https://localhost:44366/api/Task/task";
  axios
    .post(url, data)
    .then((result) => {
      console.log("Hello", result);
      let data = result.data;
          if(!Array.isArray(data)) data = [data];
          setBackendComments(data);
      setOpen(false);
    })
    .catch((error) => {
      alert("Try again..!");
      console.log(error);
    });
  }

  const deleteTask = (TaskId) =>{
    if (window.confirm("Are you sure that you want to delete comment..?")) {
      const data = {
        id: TaskId,
      };
      const url = `https://localhost:44366/api/Task/${TaskId}`;
      axios
        .delete(url, data)
        .then((result) => {
          console.log("Hello", result);
          let data = result.data;
          if(!Array.isArray(data)) data = [data];
          setBackendComments(data);
        })
        .catch((error) => {
          alert("Try again..!");
          console.log(error);
        });
    }
  }

  useEffect(() => {
    const url = `https://localhost:44366/api/Task`;
    axios
      .get(url)
      .then((result) => {
        let data = result.data;
        if (!Array.isArray(data)) data = [data];
        setBackendComments(data);
        console.log("Hello", result.data);
      })
      .catch((error) => {
        alert("Try again..!");
        console.log(error);
      });
  }, []);

  const top100Films = [
    { label: "Chandula" },
    { label: "Maleesha" },
    { label: "Nipuni" },
    { label: "De Silva" },
    { label: "Romesh" },
    { label: "Perera" },
  ];

  return (
    <div className="box-style">
      <div>
        <Button onClick={handleCreateTask}>
          <AddCircleRoundedIcon> </AddCircleRoundedIcon>Create Task
        </Button>
      </div>
      <div className="task-title-container">
        <div className="task-detail-1-title">
          <b>Task Name</b>
        </div>
        <div className="task-detail-2-title">
          <b>Assignees</b>
        </div>
        <div className="task-detail-3-title">
          <b>Due Date</b>
        </div>
        <div className="task-detail-4-title">
          <b>Progress</b>
        </div>
      </div>
      <div>{isViewComment && (<CommentSection currentUserId={1} commentOpen={commentOpen} taskId={taskId} />)}
      </div>

      <div>
        {backendComments.map((backendComment) => (
          <div  className="task-container">
            <div className="task-detail-1">{backendComment.taskName}</div>
            <div className="task-detail-2">
              <div className="comment-image-container">
                <img src="/profile.jpg" alt="logo" width={25} />
              </div>
            </div>
            <div className="task-detail-3">{backendComment.dueDate}</div>
            <div className="task-detail-4">
            <Accordion
                sx={{ height: "0px", width: "250px" }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ width: '100%'}}>
      <LinearProgress variant="determinate" value={20}  />
    </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField
                    label="Progress"
                    id="outlined-start-adornment"
                    sx={{
                      m: 1,
                      width: "15ch",
                      height: "5ch",
                      backgroundColor: "white",
                      
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">%</InputAdornment>
                      ),
                    }}
                  />
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="task-comment-icon">
              <CommentRoundedIcon onClick={() => viewComment(backendComment.id)}></CommentRoundedIcon>
            </div>
            <div className="task-comment-delete">
              <DeleteForeverIcon onClick={() => deleteTask(backendComment.id)}></DeleteForeverIcon>
            </div>
            <div>
              <Button variant="contained"
                sx={{
                  color: "black",
                  padding: "0 0 0 0",
                  backgroundColor: "#054da7",
                  cursor: "pointer",
                }} onClick={handleCreateTask}>Edit</Button>
            </div>
          </div>
        ))}
        ;
      </div>

      <div>
        <Dialog open={open} className="task-add-dialog">
          <DialogTitle>Add Innovative Task</DialogTitle>
          <DialogContent>
            <br></br>
            <Stack spacing={2}>
              Task Name
              <TextField
                label="Add"
                placeholder="Enter Task Name"
                autoFocus
                margin="dense"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
              />
              Due Date
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker
                    label="Controlled field"
                    value={dueDate}
                    onChange={(newValue) => setDueDate(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
              Add Member
              <div className="addTo-memberToTask">
              <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Select" />
                  )}
                />
              </div>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={addTask}>Add</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Page;
