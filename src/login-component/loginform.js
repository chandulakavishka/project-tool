import React, { useState } from "react";
import axios from "axios";
import "./loginform.css";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Box,
  Stack,
  Alert,
  FormControlLabel, // Import FormControlLabel
  Checkbox, // Import Checkbox
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import image from "../image/loginimg.jpg";

function Loginform() {
  const paperStyle = {
    height: "70vh",
    width: 900,
    margin: "100px auto",
    backgroundColor: "white",
    borderRadius: "25px",
  };
  const avatarStyle = { backgroundColor: "rgb(24 13 91)" };
  const btstyle = {
    margin: "20px 0 0 0",
    backgroundColor: "rgb(24 13 91)",
    cursor: "pointer",
  };
  const paperStyle1 = { borderRadius: "25px" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailRegError, setEmailRegError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordRegError, setPasswordRegError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  const checkData = (e) => {
    e.preventDefault();

    setLoadingError(false);
    setLoading(false);
    setEmailError(false);
    setEmailRegError(false);
    setPasswordError(false);
    setPasswordRegError(false);

    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const passwordReg =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    if (email === "") {
      setEmailError(true);
    } else if (emailReg.test(email) === false) {
      setEmailRegError(true);
    } else if (password === "") {
      setPasswordError(true);
      // } else if (passwordReg.test(password) === false) {
      //   setPasswordRegError(true);
    } else {
      const data = {
        email: email,
        password: password,
      };

      const url = "https://localhost:44387/api/User/Login/login";
      axios
        .post(url, data)
        .then((result) => {
          if (result.data.token) {
            localStorage.setItem(
              "AUTH_TOKEN",
              JSON.stringify(result.data.token)
            );
          }
          setLoading(true);
          window.location.replace("/task");
          clear();
        })
        .catch((error) => {
          setLoadingError(true);
        });
    }
  };
  const clear = () => {
    setEmail("");
    setPassword("");
    setEmailError(false);
    setEmailRegError(false);
    setPasswordError(false);
    //setPasswordRegError(false);
  };

  return (
    <div>
      <div className="loading">
        {loading && (
          <Alert severity="success">
            Login Successful — <strong>Waiting...</strong>
            <LinearProgress color="success" />
          </Alert>
        )}
      </div>
      <div className="loadingError">
        {loadingError && (
          <Alert severity="error">
            Email or password invalid....! Try again. —{" "}
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
              <h2>Sign In</h2>
              <br></br>
            </Grid>
            <Stack spacing={2}>
              <TextField
                label="Email"
                placeholder="Enter Email"
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
            </Stack>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btstyle}
              fullWidth
              onClick={(e) => checkData(e)}
            >
              Sign in
            </Button>
            <Typography>
              <Link href="/forgotPassword">Forgot Password</Link>
            </Typography>
            <Typography>
              {" "}
              Don't have an account ?<Link href="/signup">Sign up</Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Loginform;
