import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, Grid, Button, MenuItem, FormControl, InputLabel, Stack, Chip } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import DeleteIcon from '@mui/icons-material/Add';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import Select from "react-select";

import ProjectCard from './components/ProjectCard';

const Projects = () => {

  return (
    <>
      <Box sx={{ display: 'flex' }} >
        <CssBaseline />

        <NavBar />

        <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', borderRadius: '5px', padding: '70px 20px 10px 20px' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ alignItems: "center", marginTop: "10px" }}>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  style={{ borderRadius: "20px", textTransform: 'none' }}
                >
                  New
                </Button>
              </Grid>

              <Grid item xs={10} style={{ backgroundColor: "white", padding: "10px 5px", borderRadius: "5px" }}>
                <Stack direction="row" spacing={2} style={{ justifyContent: "center", alignItems: "center" }}>
                  <div>
                    <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                      Year
                    </label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                    />
                  </div>

                  <div>
                    <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                      Inactive
                    </label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                    />
                  </div>

                  <div>
                    <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                      Quator
                    </label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                    />
                  </div>

                  <div>
                    <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                      Execution Layer
                    </label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                    />
                  </div>

                  <div>
                    <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                      Department
                    </label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                    />
                  </div>

                  <div>
                    <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                      Innovatives
                    </label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                    />
                  </div>

                  <div>
                    <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                      Cooperative Objects
                    </label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                    />
                  </div>

                  <div>
                    <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                      Users
                    </label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                    />
                  </div>
                </Stack>
              </Grid>

              <Grid item xs={1} style={{ display: "flex", gap: "15px", alignItems: "center", float: "right" }}>
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


            <Grid container spacing={2} style={{ alignItems: "center", marginTop: "10px" }}>
              <ProjectCard />
            </Grid>
          </Box>
        </Box>
      </Box >
    </>
  )
}

export default Projects