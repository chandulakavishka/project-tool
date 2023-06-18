import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import ResetPassword from "./resetPassword";

function ForgotPasswordDialog() {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailRegError, setEmailRegError] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOK = () => {
    const data = {
      email: email,
    };

    const url = `https://localhost:44366/api/User/ForgotPassword/forgot-password?email=${email}`;
    axios
      .post(url, data)
      .then((result) => {
        setOpen(false);
        alert("Please check your email and reset your Password...");
      })
      .catch((error) => {
        setOpen(true);
        alert("Email is not found...!");
        clear();
      });
    setOpen(false);
    clear();
  };

  const clear = () => {
    setEmail("");
    setEmailError(false);
    setEmailRegError(false);
  };

  return (
    <div className="dialog-forgotPassword">
      <ResetPassword />
      <Dialog open={open}>
        <DialogTitle>Forgot Your Password?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your valid email and We'll send a link to your email.
          </DialogContentText>
          <br />
          <TextField
            label="Email Address"
            placeholder="Enter email address"
            autoFocus
            margin="dense"
            variant="outlined"
            size="small"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError || emailRegError}
            helperText={
              emailError
                ? "Email is required."
                : emailRegError
                ? "Email type is invalid."
                : ""
            }
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

export default ForgotPasswordDialog;
