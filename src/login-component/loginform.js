import React, { useState } from "react";
import axios from "axios";
//import Page from "../page-component/page"
import "./loginform.css";
import "./forgotPassword"
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
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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

  const checkData = (e) => {
    e.preventDefault();

    setEmailError(false);
    setEmailRegError(false);
    setPasswordError(false);
    setPasswordRegError(false);

    const emailReg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    }else{
      const data = {
        email: email,
        password: password,
      };
  
      const url = "https://localhost:44366/api/User/login";
      axios
        .post(url, data)
        .then((result) => {
          //const dt = result.data;
          alert("Login Successful..!");
          //if (dt.statusMessage)
            clear();
        })
        .catch((error) => {
          alert("Email or password invalid....! Try again.");
          console.log(error);
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
  );
}

export default Loginform;
