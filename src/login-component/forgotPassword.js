import React, { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function FormDialogToForgotPassword() {
  const [forgotPassword, setForgotPassword] = useState("");
  const [open, setOpen] = useState(true);

  // const handleClickOpen = () => {
  //   setOpen(false);
  // }
  const handleClose = () => {
    setOpen(false);
  };

  const handleOK = (e) => {
    const data = {
      email:forgotPassword
    };

    const url = "https://localhost:44366/api/User/forgot-password";
    axios
      .post(url, data)
      .then((result) => {
        const dt = result.data;
        alert(dt.statusMessage);
      })
      .catch((error) => {
        alert("Email is not found...!");
        console.log(error);
      });
      setOpen(false);

  }

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Forgot Your Password?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your valid email and We 'll send a code your email.
          </DialogContentText>
          <br></br>
          <TextField
            label="Email Address"
            placeholder="Enter email address"
            autoFocus
            margin="dense"
            variant="outlined"
            size="small"
            fullWidth
            required
           value={forgotPassword}
           onChange={(e) => setForgotPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOK}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialogToForgotPassword;