import React from "react";
import CommentSection from "../comment-component/Comments";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Stack,
  TextField,
  Button,
  Box,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Autocomplete from "@mui/material/Autocomplete";
import LinearProgress from "@mui/material/LinearProgress";
import InputAdornment from "@mui/material/InputAdornment";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./page.css";
import Topbar from "../global/topbar";
import Test from "./test";

const Page = ({currentUserId,userName,userEmail}) => {
  const [commentOpen, setCommentOpen] = useState(true);
  const [taskId, setTaskId] = useState();
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState();
  const [backendComments, setBackendComments] = useState([]);
  const [open, setOpen] = useState(false);
  const [isViewComment, setIsViewComment] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreateTask = () => {
    setOpen(true);
  };
  const viewComment = (TaskId) => {
    setIsViewComment(true);
    setCommentOpen(true);
    setTaskId(TaskId);
  };
  const members = [
    {id: 1,imgUrl:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",},
    {id: 2,imgUrl:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",},
    {id: 3,imgUrl:"https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",},];

  const addTask = (e) => {
    e.preventDefault();
    const data = {
      innovativeId: 1,
      taskName: taskName,
      dueDate: dueDate,
    };
    const url = "https://localhost:44387/api/Task/task";
    axios
      .post(url, data)
      .then((result) => {
        let data = result.data;
        if (!Array.isArray(data)) data = [data];
        setBackendComments(data);
        setOpen(false);
      })
      .catch((error) => {
        alert("Try again..!");
      });
  };

  const deleteTask = (TaskId) => {
    if (window.confirm("Are you sure that you want to delete comment..?")) {
      const data = {
        id: TaskId,
      };
      const url = `https://localhost:44387/api/Task/${TaskId}`;
      axios
        .delete(url, data)
        .then((result) => {
          let data = result.data;
          if (!Array.isArray(data)) data = [data];
          setBackendComments(data);
        })
        .catch((error) => {
          alert("Try again..!");
        });
    }
  };

  useEffect(() => {
    const url = `https://localhost:44387/api/Task`;
    axios
      .get(url)
      .then((result) => {
        let data = result.data;
        if (!Array.isArray(data)) data = [data];
        setBackendComments(data);
      })
      .catch((error) => {
        alert("Try again..!");
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
    <div className="full-task-page">
      <Test />
      <Topbar userName={userName} userEmail={userEmail}/>
      <Box className="box-style" sx={{ boxShadow: 2, backgroundColor: "#fff" }}>
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
        <div>
          {isViewComment && (
            <CommentSection
              currentUserId={currentUserId}
              userName={userName}
              commentOpen={commentOpen}
              taskId={taskId}
            />
          )}
        </div>

        <div>
          {backendComments.map((backendComment) => (
            <div className="task-container">
              <div className="task-detail-1">{backendComment.taskName}</div>
              <div className="task-detail-2">
                <div className="comment-image-container">
                  <div style={{ textAlign: "left", display: "flex" }}>
                    {members.map((member) => {
                      return (
                        <div key={member.id}>
                          <img
                            src={member.imgUrl}
                            alt="member"
                            style={{ width: "30px", borderRadius: "50%" }}
                          />
                        </div>
                      );
                    })}
                    <AddCircleRoundedIcon />
                  </div>
                </div>
              </div>
              <div className="task-detail-3">{backendComment.dueDate.substring(0,19)}</div>
              <div className="task-detail-4">
                <Accordion sx={{ height: "0px", width: "250px" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress variant="determinate" value={20} />
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
                <CommentRoundedIcon
                  onClick={() => viewComment(backendComment.id)}
                ></CommentRoundedIcon>
              </div>
              <div className="task-comment-delete">
                <DeleteForeverIcon
                  onClick={() => deleteTask(backendComment.id)}
                ></DeleteForeverIcon>
              </div>
              <div>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    padding: "0 0 0 0",
                    backgroundColor: "#054da7",
                    cursor: "pointer",
                  }}
                  onClick={handleCreateTask}
                >
                  Edit
                </Button>
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
      </Box>
    </div>
  );
};

export default Page;
