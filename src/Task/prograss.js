import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Dialog, Button } from "@mui/material";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import './Task.css';

const AddUserTask = ({ TaskId }) => {
  const CloseIconStyle = {
    backgroundColor: "red",
    margin: "0 0 20px 0",
    padding: "3px",
    cursor: "pointer",
    borderRadius: "15px",
  };

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [addedUsers, setAddedUsers] = useState([]);
  const [open, setOpen] = useState(true);
  const [backendUser, setBackendUser] = useState([]);

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const filterUsers = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filtered = backendUser.filter((user) =>
      user.userName.toLowerCase().includes(searchQuery)
    );
    setFilteredUsers(filtered);
  };

  const addUser = (userName, id, TaskId) => {
    const data = {
      taskId: TaskId,
      userName: userName,
      userID: id
    };
    const url = `https://localhost:44366/api/Task?taskId=${TaskId}`;
    axios
      .post(url, data)
      .then((response) => {
        const addedUser = {
          id: response.data.userId, 
          userName: response.data.userName 
        };
        setAddedUsers((prevUsers) => [...prevUsers, addedUser]);
      })
      .catch((error) => {
      });
  };

  useEffect(() => {
    const url = `https://localhost:44366/api/Task/${1}`;
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setAddedUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        alert("Failed to fetch users. Please try again.");
      });
  }, [TaskId]);

  useEffect(() => {
    const url = `https://localhost:44366/api/User/GetAllUserNamesAndIds`;
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setBackendUser(data);
        setFilteredUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        alert("Failed to fetch users. Please try again.");
      });
  }, []);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { width: '300px', height: '400px', padding: '20px' } }}
      >
       <CloseIcon style={CloseIconStyle} onClick={handleClose}></CloseIcon>
        <input type="text" placeholder="Search Users" onChange={filterUsers} />

        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              {user.userName}
              <Button
                onClick={() => addUser(user.userName, user.id, TaskId)}
                sx={{
                  backgroundColor: 'blue',
                  color: 'white',
                  margin: '4px 0 4px 20px',
                  height: '20px',
                }}
              >
                Add
              </Button>
            </li>
          ))}
        </ul>

        <h3>Added Users</h3>
        <TransitionGroup>
          {addedUsers.map((user) => (
            <CSSTransition key={user.id} timeout={500} classNames="fade">
              <li>{user.userName}</li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Dialog>
    </div>
  );
};

export default AddUserTask;

