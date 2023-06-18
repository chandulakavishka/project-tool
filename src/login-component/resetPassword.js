import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Box,
  Stack,
} from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import image from "../image/loginimg.jpg";

function ResetPasswordForm() {
  const paperStyle = {
    height: "70vh",
    width: 900,
    margin: "100px auto",
    backgroundColor: "white",
    borderRadius: "25px",
  };
  const avatarStyle = { backgroundColor: "rgb(24 13 91)" };
  const btstyle = {
    margin: "30px 0px 0 0",
    padding: "6px 40px 6px 40px",
    backgroundColor: "rgb(24 13 91)",
    cursor: "pointer",
  };
  const btrstyle = {
    margin: "30px 20px 0 30px",
    padding: "6px 40px 6px 40px",
    backgroundColor: "#45456a",
    cursor: "pointer",
  };
  const paperStyle1 = { borderRadius: "25px" };

  const [resetPassword, setResetPassword] = useState("");
  const [resetConfirmPassword, setResetConfirmPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordRegError, setPasswordRegError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailRegError, setEmailRegError] = useState(false);
  const [tokenError, setTokenError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError(false);
    setEmailRegError(false);
    setPasswordError(false);
    setPasswordRegError(false);
    setConfirmPasswordError(false);
    setTokenError(false);

    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordReg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    if (email === "") {
      setEmailError(true);
    } else if (emailReg.test(email) === false) {
      setEmailRegError(true);
    } else if (resetPassword === "") {
      setPasswordError(true);
    } else if (passwordReg.test(resetPassword) === false) {
      setPasswordRegError(true);
    } else if (!(resetConfirmPassword === resetPassword)) {
      setConfirmPasswordError(true);
    } else if (resetToken === "") {
      setTokenError(true);
    } else {
      const data = {
        email:email,
        token: resetToken,
        password: resetPassword,
        confirmPassword: resetConfirmPassword,
      };

      const url = `https://localhost:44366/api/User/ResetPassword/reset-password?token=${resetToken}&email=${email}`;
      axios
        .post(url, data)
        .then((result) => {
          alert("Password reset is successful");
          clear();
          window.location.replace("/");
        })
        .catch((error) => {
          alert("Token is invalid...!");
        });
    }
  };

  const clear = () => {
    setEmail("");
    setResetPassword("");
    setResetConfirmPassword("");
    setResetToken("");
    setEmailError(false);
    setEmailRegError(false);
    setPasswordError(false);
    setPasswordRegError(false);
    setConfirmPasswordError(false);
    setTokenError(false);
  };

  return (
    <div className="reset-password">
      <Paper elevation={10} style={paperStyle}>
        <Grid container spacing={2}>
          <Paper elevation={10} style={paperStyle1}>
            <Grid item xs={5} className="section1">
              <Box
                sx={{
                  width: 440,
                  height: "70vh",
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "25px 0 0 25px",
                }}
              />
            </Grid>
          </Paper>
          <Grid item xs={6} className="section2">
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockResetIcon />
              </Avatar>
              <h2>Reset Password</h2>
              <br></br>
            </Grid>
            <Stack spacing={2}>
              <TextField
                label="Email"
                placeholder="Enter email"
                variant="outlined"
                size="small"
                fullWidth
                required
                error={emailError || emailRegError}
                helperText={
                  emailError
                    ? "Email is required."
                    : emailRegError
                    ? "Email type is invalid."
                    : ""
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                helperText={
                  confirmPasswordError ? "Password does not match." : ""
                }
                value={resetConfirmPassword}
                onChange={(e) => setResetConfirmPassword(e.target.value)}
              />
              <TextField
                label="Token"
                placeholder="Enter verify token"
                variant="outlined"
                size="small"
                fullWidth
                required
                error={tokenError}
                helperText={tokenError ? "Token is required." : ""}
                value={resetToken}
                onChange={(e) => setResetToken(e.target.value)}
              />
            </Stack>
            <Button
              className="bt1"
              type="reset"
              variant="contained"
              style={btrstyle}
              onClick={(e) => clear(e)}
            >
              Reset all
            </Button>
            <Button
              className="bt2"
              type="submit"
              color="primary"
              variant="contained"
              style={btstyle}
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ResetPasswordForm;
