import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { Grid, Paper, Avatar, TextField, Button, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import image from "../image/loginimg.jpg";

function Signup() {
  const paperStyle = {
    height: "60vh",
    width: 700,
    margin: "100px auto",
    backgroundColor: "white",
    borderRadius: "25px",
  };
  const avatarStyle = { backgroundColor: "rgb(24 13 91)" };
  const btstyle = {
    margin: "20px 0px 0 0",
    backgroundColor: "rgb(24 13 91)",
    cursor: "pointer",
  };
  const btrstyle = {
    margin: "20px 20px 0 30px",
    backgroundColor: "rgb(240, 255, 255)",
    color: "black",
    cursor: "pointer",
  };
  const paperStyle1 = { borderRadius: "25px" };

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [phoneNo, setPhoneNo] = useState("");

  const passData = (e) => {
    e.preventDefault();

    const url = "https://localhost:44322/api/Registration/Registration";
    const data = {
      Name: name,
      Email: email,
      Password: password,
      PhoneNo: phoneNo,
    };
    axios
      .post(url, data)
      .then((result) => {
        clear();
        const dt = result.data;
        alert(dt.StatusMessage);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const clear = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPhoneNo("");
  };

  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid container spacing={2}>
        <Paper elevation={10} style={paperStyle1}>
          <Grid item xs={5} className="section1">
            <Box
              sx={{
                width: 340,
                height: "60vh",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "25px",
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
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            variant="standard"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            placeholder="Enter email"
            variant="standard"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="standard"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Phone No"
            placeholder="Enter phone no"
            variant="standard"
            fullWidth
            required
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
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
            onClick={(e) => passData(e)}
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Signup;
