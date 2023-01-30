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
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import image from "../image/loginimg.jpg";

function Loginform() {
  const paperStyle = {
    height: "60vh",
    width: 700,
    margin: "100px auto",
    backgroundColor: "white",
    borderRadius: "25px",
  };
  const avatarStyle = { backgroundColor: "rgb(24 13 91)" };
  const btstyle = {
    margin: "20px 0",
    backgroundColor: "rgb(24 13 91)",
    cursor: "pointer",
  };
  const paperStyle1 = { borderRadius: "25px" };

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const checkData = (e) => {
    e.preventDefault();
    const data = {
      Email: email,
      Password: password,
    };

    const url = "https://localhost:7294/api/User/login";
    axios
      .post(url, data)
      .then((result) => {
        const dt = result.data;
        alert(dt.statusMessage);
        if (dt.statusMessage)
          clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const clear = () => {
    setEmail("");
    setPassword("");
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
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Email"
            placeholder="Enter Email"
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
            <Link href="#">Forgot Password</Link>
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
