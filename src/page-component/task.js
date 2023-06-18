import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  LinearProgress,
  Stack,
  TextField,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Topbar from "../global/topbar";
import Test from "./test";

import "./task.css";
import CommentSection from "../comment-component/Comments";
import Prograss from "../prograss";

const Task = ({ currentUserId, userName, userEmail }) => {
  const [commentOpen, setCommentOpen] = useState(true);
  const [taskId, setTaskId] = useState();
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState();
  const [progress, setProgress] = useState();
  const [backendComments, setBackendComments] = useState([]);
  const [open, setOpen] = useState(false);
  const [isViewComment, setIsViewComment] = useState(false);
  const [openEditDate, setOpenEditDate] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);

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
  const viewAddUser = (TaskId) => {
    setOpenAddUser(true);
    setTaskId(TaskId);
  };
  const viewDateEdit = (TaskId) => {
    setOpenEditDate(true);
    setTaskId(TaskId);
  };

  const editDueDate = (TaskId) => {
    const data = {
      id: 19,
      dueDate: dueDate,
    };
    const url = "https://localhost:44387/api/Task/edit";
    axios
      .post(url, data)
      .then((result) => {
        let data = result.data;
        if (!Array.isArray(data)) data = [data];
        setBackendComments(data);
        setOpenEditDate(false);
      })
      .catch((error) => {
        alert("Try again..!");
      });
  };
  const editProgress = (TaskId) => {
    const data = {
      id: TaskId,
      prograss: progress,
    };
    const url = "https://localhost:44387/api/Task/editPrograss";
    axios
      .post(url, data)
      .then((result) => {
        let data = result.data;
        if (!Array.isArray(data)) data = [data];
        setBackendComments(data);
      })
      .catch((error) => {
        alert("Try again..!");
      });
  };
  const members = [
    {
      id: 1,
      imgUrl:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    },
    {
      id: 2,
      imgUrl:
        "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",
    },
    {
      id: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
  ];

  const addTask = (e) => {
    e.preventDefault();
    console.log("hello", dueDate);
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
      <Topbar userName={userName} userEmail={userEmail} />
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
                    <AddCircleRoundedIcon
                      onClick={() => viewAddUser(backendComment.id)}
                      sx={{cursor: "pointer" }}
                    />
                    <div>
                      {openAddUser && (
                        <Prograss
                          //innovativeId={1}
                          Open={openAddUser}
                          TaskId={taskId}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="task-detail-3">
                {backendComment.dueDate.substring(0, 10)}
                <PendingActionsIcon
                  sx={{ margin: "0 0 0 10px", cursor: "pointer" }}
                  onClick={() => viewDateEdit(backendComment.id)}
                ></PendingActionsIcon>
              </div>
              <div className="task-detail-4">
                <Accordion sx={{ height: "0px", width: "250px" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress
                        variant="determinate"
                        value={backendComment.prograss}
                        sx={{
                          width: "100%",
                          borderRadius: "5px",
                          height: "8px",
                          backgroundColor: "#EBEEF1",
                        }}
                      />
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TextField
                      label="Progress"
                      id="outlined-start-adornment"
                      value={progress}
                      onChange={(e) => setProgress(e.target.value)}
                      onBlur={() => editProgress(backendComment.id)}
                      sx={{
                        margin: "0 0 0 220px",
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
            </div>
          ))}
          ;
          <Dialog open={openEditDate}>
            <TextField
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              onBlur={() => editDueDate()}
            ></TextField>
          </Dialog>
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
                <TextField
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                ></TextField>
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

export default Task;
