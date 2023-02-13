import React, { useState } from "react";
import axios from "axios";
import {
    TextField,
    Button,
    Stack,
  } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function FormDialogToResetPassword() {
  const [resetPassword, setResetPassword] = useState("");
  const [resetConfirmPassword, setResetConfirmPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordRegError, setPasswordRegError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [open, setOpen] = useState(true);


  // const handleClickOpen = () => {
  //   setOpen(false);
  // }
  const handleClose = () => {
    setOpen(false);
  };

  const handleOK = (e) => {
    e.preventDefault();

    setPasswordError(false);
    setPasswordRegError(false);
    setConfirmPasswordError(false);

    const passwordReg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

      if (resetPassword === "") {
        setPasswordError(true);
      } else if (passwordReg.test(resetPassword) === false) {
        setPasswordRegError(true);
      } else if (!(resetConfirmPassword === resetPassword)) {
        setConfirmPasswordError(true);
      }else{
        const data = {
            token:resetToken,  
            password:resetPassword,
            confirmPassword:resetConfirmPassword
          };
      
          const url = "https://localhost:44366/api/User/reset-password";
          axios
            .post(url, data)
            .then((result) => {
              const dt = result.data;
              alert(dt.statusMessage);
            })
            .catch((error) => {
              alert("Token is in Invalid...!");
              console.log(error);
            });
            setOpen(false);
      }
  }

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Reset Your Password?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your valid code and new password.
          </DialogContentText>
          <br></br>
          <Stack spacing={2}>
          <TextField
            label="Verification code"
            placeholder="Enter verification code"
            autoFocus
            margin="dense"
            variant="outlined"
            size="small"
            fullWidth
            required
           value={resetToken}
           onChange={(e) => setResetToken(e.target.value)}
          />
          <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              variant="outlined"
              size="small"
              fullWidth
              required
              error={passwordError || passwordRegError}
              helperText={
                passwordError
                  ? "Password is required."
                  : passwordRegError
                  ? "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
                  : ""
              }
              value={resetPassword}
              onChange={(e) => setResetPassword(e.target.value)}
            />
            <TextField
              label="ConfirmPassword"
              placeholder="Enter ConfirmPassword"
              type="password"
              variant="outlined"
              size="small"
              fullWidth
              required
              error={confirmPasswordError}
              helperText={confirmPasswordError ? "Password is not match." : ""}
              value={resetConfirmPassword}
              onChange={(e) => setResetConfirmPassword(e.target.value)}
            />
            </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOK}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialogToResetPassword;