import { CssBaseline, Typography,Box } from '@mui/material'
import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar'

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('profilePicture', profilePicture);

    try {
      const response = await axios.post('/api/user/upload-profile-picture', formData);
      console.log(response.data); // success message
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline/>
      <NavBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor: '#f9f9f9', borderRadius: '5px',padding:'70px 0 0 20px' }}>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="profilePicture">Profile Picture:</label>
        <input type="file" id="profilePicture" accept="image/*" onChange={handleFileChange} />
      <button type="submit">Save</button>
      </form>
      </Box>
    </Box>
  )
}

export default Profile