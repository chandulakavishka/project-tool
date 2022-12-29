import React from 'react';
import "./loginform.css";
import {Grid,Paper,Avatar, TextField, Button, Typography,Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { margin } from '@mui/system';
const loginform = () => {

    const paperStyle={padding :20,height:'60vh', width:350, margin:"80px auto", backgroundColor:'#F9FFFF'}
    const avatarStyle={backgroundColor: 'rgb(255 105 98)'}
    const btstyle={margin:'8px 0', backgroundColor:'rgb(255 105 98)'}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
               <h2>Sing In</h2>
            </Grid>
            <TextField label='Username' placeholder='Enter username' variant="standard" fullWidth required/>
            <TextField label='Password' placeholder='Enter password' type='password' variant="standard" fullWidth required/>
            <FormControlLabel
            control={
              <Checkbox name="checkedB" color="primary"/>
            }
            label="Remember me"
            />
            <Button type='submit' color='primary' variant="contained" style={btstyle} fullWidth>Sign in</Button>
            <Typography>
            <Link href="#">Forgot Passcode</Link>
            </Typography>
            <Typography> Do you have an account ?
            <Link href="#">Sign up</Link>
            </Typography>
            
            </Paper>
        </Grid>
    )
}

export default loginform;