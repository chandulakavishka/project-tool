import React, { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function FormDialogToVerify() {
  const [verify, setVerify] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOK = (e) => {
    const data = {
      token:verify
    };

    const url = "https://localhost:44366/api/User/verify";
    axios
      .post(url, data)
      .then((result) => {
        const dt = result.data;
        alert(dt.statusMessage);
      })
      .catch((error) => {
        alert("Verification is Invalid...!");
        console.log(error);
      });
      setOpen(false);

  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open}>
        <DialogTitle>Registration Verification.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please check your phone and enter valid code here. Then your registration will verify.
          </DialogContentText>
          <br></br>
          <TextField
            label="Verification Code"
            placeholder="Enter verification code"
            autoFocus
            margin="dense"
            type="verify"
            variant="outlined"
            size="small"
            fullWidth
            required
           value={verify}
           onChange={(e) => setVerify(e.target.value)}
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
export default FormDialogToVerify;