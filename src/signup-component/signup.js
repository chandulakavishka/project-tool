import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Box,
  Stack,
  Alert,
  LinearProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import image from "../image/loginimg.jpg";

function Signup() {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailRegError, setEmailRegError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordRegError, setPasswordRegError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [phoneNoRegError, setPhoneNoRegError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingError(false);
    setLoading(false);
    setNameError(false);
    setEmailError(false);
    setEmailRegError(false);
    setPasswordError(false);
    setPasswordRegError(false);
    setConfirmPasswordError(false);
    setPhoneNoError(false);
    setPhoneNoRegError(false);

    const userNameReg = /^[a-zA-Z-]+$/;
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordReg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    // const phoneNoReg =
    //   "^(?:0|94|+94|0094)?(?:(?P<area>11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(?P<land_carrier>0|2|3|4|5|7|9)|7(?P<mobile_carrier>0|1|2|4|5|6|7|8)d)d{6}$`";

    if (userNameReg.test(name) === false) {
      setNameError(true);
    } else if (email === "") {
      setEmailError(true);
    } else if (emailReg.test(email) === false) {
      setEmailRegError(true);
    } else if (password === "") {
      setPasswordError(true);
    } else if (passwordReg.test(password) === false) {
      setPasswordRegError(true);
    } else if (!(confirmPassword === password)) {
      setConfirmPasswordError(true);
    } else if (phoneNo === "") {
      setPhoneNoError(true);
      // } else if (phoneNoReg.test(phoneNo) === false) {
      //   setPhoneNoRegError(true);
    } else {
      const data = {
        userName: name,
        email: email,
        password: password,
        phoneNumber: phoneNo,
      };

      const url = "https://localhost:44387/api/User/Register";
      axios
        .post(url, data)
        .then((result) => {
          clear();
          setLoading(true);
          window.location.replace("/");
        })
        .catch((error) => {
          setLoadingError(true);
        });
    }
  };
  const clear = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhoneNo("");
    setNameError(false);
    setEmailError(false);
    setEmailRegError(false);
    setPasswordError(false);
    setPasswordRegError(false);
    setConfirmPasswordError(false);
    setPhoneNoError(false);
    setLoadingError(false);
    //setPhoneNoRegError(false);
  };

  return (
    <div>
      <div className="loading">
        {loading && (
          <Alert severity="success">
            Login Successful — <strong>Check Your Email...</strong>
            <LinearProgress color="success" />
          </Alert>
        )}
      </div>
      <div className="loadingError">
        {loadingError && (
          <Alert severity="error">
            User details invalid....! Check and try again. —{" "}
            <strong>check it out!</strong>
          </Alert>
        )}
      </div>
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
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign up</h2>
              <br></br>
            </Grid>
            <Stack spacing={2}>
              <TextField
                label="Username"
                placeholder="Enter username"
                variant="outlined"
                size="small"
                fullWidth
                required
                error={nameError}
                helperText={nameError ? "UserName is Invalid." : ""}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                  confirmPasswordError ? "Password is not match." : ""
                }
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <TextField
                label="Phone No"
                placeholder="Enter phone no"
                variant="outlined"
                size="small"
                fullWidth
                required
                error={phoneNoError || phoneNoRegError}
                helperText={
                  phoneNoError
                    ? "PhoneNo is required."
                    : phoneNoRegError
                    ? "PhoneNo type is invalid."
                    : ""
                }
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
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
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Signup;
