import React from "react";
import "./signup.css";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { margin } from "@mui/system";
import image from "../image/loginimg.jpg";

const signup = () => {
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
    color:"black",
    cursor: "pointer",
  };
  const paperStyle1 = { borderRadius: "25px" };

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
          />
          <TextField
            label="Email"
            placeholder="Enter email"
            variant="standard"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="standard"
            fullWidth
            required
          />
          <TextField
            label="Phone No"
            placeholder="Enter phone no"
            variant="standard"
            fullWidth
            required
          />
          <Button
            className="bt1"
            type="reset"
            variant="contained"
            style={btrstyle}
          >
            Reset all
          </Button>
          <Button
            className="bt2"
            type="submit"
            color="primary"
            variant="contained"
            style={btstyle}
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default signup;