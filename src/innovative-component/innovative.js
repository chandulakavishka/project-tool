import React, { useState } from "react";
import "./innovative.css";
import { useEffect } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Stack,
  TextField,
  Button
} from "@mui/material";

import InsideBox from "./InsideBox";
import FilterBox from "./FilterBox";


const Innovative = () => {

  const members = [
          {id: 1, imgUrl: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"},
          {id: 2, imgUrl: "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg"},
          {id: 3, imgUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
        ];

  //const [data, setData] = useState([]);
  const [values, setValues] = useState([]);
  const [popup, setPopup] = useState(false);
  //const [open,setOpen] = useState(false);
  const [innovativeName,setInnovativeName] =useState();
  const [status,setStatus] =useState();
  const [prograss,setPrograss] =useState();

  const boxopen =()=>{
    setPopup(true)
  };
  const handleClose = () => {
    setPopup(false);
  };
  const AddInnovative =(e)=>{
    e.preventDefault();
    const data = {
      projectId: 1,
      innovativeName: innovativeName,
      status: status,
      prograss:prograss,
    };

    const url = "https://localhost:44366/api/Innovative/add-innovative";
    axios
      .post(url, data)
      .then((result) => {
        console.log("Hello", result);
        let data = result.data;
            if(!Array.isArray(data)) data = [data];
            setValues(data);
            setPopup(false);
      })
      .catch((error) => {
        alert("Try again..!");
        console.log(error);
      });

      window.location.reload();

  }


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    const url = 'https://localhost:44366/api/Innovative';
    axios
      .get(url)
      .then((result) => {
        let data = result.data;
        if (!Array.isArray(data)) data = [data];
        setValues(data);
        console.log("Hello", result.data);
      })
      .catch((error) => {
        alert("Try again..!");
        console.log(error);
      });
    }, []);
 
  return (
    <div className="box">
       <FilterBox boxopen={boxopen} />
      
      <Grid container spacing={3} sx={{marginBottom: '20px', gridTemplateColumns: "repeat(3, 1fr)"}}>
    {values.map((value) => {
        return(
      <Grid key={value.id} item xs={6} md={4} >
        
        <Item sx={{height:'200px', border: "1px solid #C9CED3"}}>
          <InsideBox head={value.innovativeName} startDate={value.startDate.substring(0, 10)} status={value.status} tasks="5" users="2" members={members} progress={value.prograss} />
        </Item>
      </Grid>
      );
      
    })}  
    </Grid>
   
    <Dialog open={popup} className="task-add-dialog">
          <DialogTitle>Add Innovative</DialogTitle>
          <DialogContent>
            <br></br>
            <Stack spacing={2}>
              Innovative Name
              <TextField
                label="Add"
                placeholder="Enter Task Name"
                autoFocus
                margin="dense"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={innovativeName}
            onChange={(e) => setInnovativeName(e.target.value)}
              />
              Status
              <TextField
                label="Add"
                placeholder="Enter Task Name"
                autoFocus
                margin="dense"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={status}
            onChange={(e) => setStatus(e.target.value)}
              />
              Prograss
              <TextField
                label="Add"
                placeholder="Enter Task Name"
                autoFocus
                margin="dense"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={prograss}
            onChange={(e) => setPrograss(e.target.value)}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={AddInnovative}>Add</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>

  </div>
  
  );
};

export default Innovative;
