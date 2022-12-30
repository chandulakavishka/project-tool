import React from "react";
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
import { margin } from "@mui/system";
import image from "../image/loginimg.jpg";

const loginform = () => {
  const paperStyle = {
    height: "60vh",
    width: 700,
    margin: "100px auto",
    backgroundColor: "white",
    borderRadius: "25px",
  };
  const avatarStyle = { backgroundColor: "rgb(24 13 91)" };
  const btstyle = {
    margin: "8px 0",
    backgroundColor: "rgb(24 13 91)",
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
            <h2>Sing In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
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
          >
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot Password</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?<Link href="#">Sign up</Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default loginform;
