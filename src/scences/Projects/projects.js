import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, Select, MenuItem, FormControl, InputLabel, Stack, Chip } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import DeleteIcon from '@mui/icons-material/Add';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
// import { Row, Col } from "react-bootstrap";

const Projects = () => {

  return (
    <>
      <Box sx={{ display: 'flex' }} >
        <CssBaseline />

        <NavBar />

        <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', borderRadius: '5px', padding: '70px 0 0 20px' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  style={{ borderRadius: "20px", textTransform: 'none' }}
                >
                  New
                </Button>
              </Grid>

              <Grid item xs={8}>

              </Grid>

              <Grid item xs={2} style={{ display: "flex", gap: "15px", justifyContent: "center", alignItems: "center" }}>
                <Typography>
                  Default
                </Typography>

                <DensitySmallIcon style={{ fontSize: "20px" }} />
              </Grid>
            </Grid>

            {/* <div style={{ marginTop: "30px", display: "flex", gap: "15px", alignItems: "center" }}> */}
            <Stack direction="row" spacing={3} style={{ marginTop: "30px", alignItems: "center" }}>
              <Typography>
                Progress of Key Results
              </Typography>

              {/* <FormControl style={{ width: "100px" }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                // onChange={handleChange}
                // style={{ height: "40px" }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}


              <Chip label="Category" color="primary" style={{ borderRadius: "10px" }} />
              {/* </div> */}
            </Stack>
          </Box>
        </Box>
      </Box >
    </>
  )
}

export default Projects