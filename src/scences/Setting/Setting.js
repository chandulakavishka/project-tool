import React, { useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import Topbar from '../global/Topbar';


export const Setting = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    description:'',
    profilePicture: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setUserData({
      ...userData,
      profilePicture: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new FormData object to send the user data and profile picture
    const formData = new FormData();
    formData.append('firstName', userData.firstName);
    formData.append('lastName', userData.lastName);
    formData.append('email', userData.email);
    formData.append('city', userData.city);
    formData.append('description', userData.description);
    formData.append('profilePicture', userData.profilePicture);

    // Make a POST request to the backend API to update the user data
    axios.post('/api/updateUser', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const styles = {
    label: {
      display: 'block',
      margin: '10px 0',
      fontWeight: 'bold',
    },
    input: {
      display: 'block',
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginBottom: '20px',
    },
  };
  const fname = 'chandula'
  const lname = 'Kavishka'
  const email = 'chandulakavishka0@gmail.com'
  return (
    <>
    <Topbar/>
    <Box sx={{m:'30px 180px'}}>

    <form onSubmit={handleSubmit}>
      <label style={styles.label} htmlFor="firstName">First Name:</label>
      <input style={styles.input} type="text" name="firstName" value={userData.firstName} onChange={handleInputChange} placeholder={fname} disabled/>

      <label style={styles.label} htmlFor="lastName">Last Name:</label>
      <input style={styles.input} type="text" name="lastName" value={userData.lastName} onChange={handleInputChange} placeholder={lname} disabled/>

      <label style={styles.label} htmlFor="email">Email Address:</label>
      <input style={styles.input} type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder={email} disabled />

      <label style={styles.label} htmlFor="city">City/Town:</label>
      <input style={styles.input} type="text" name="city" value={userData.city} onChange={handleInputChange} />

      <label style={styles.label} htmlFor="description">Description:</label>
      <textarea style={styles.input} type="textarea" name="description" value={userData.description} onChange={handleInputChange} />

      <label style={styles.label} htmlFor="profilePicture">Profile Picture:</label>
      <input style={styles.input} type="file" name="profilePicture" onChange={handleFileChange} />

      <button style={styles.button} type="submit">Save Changes</button>
    </form>
    </Box>
    </>
  );
  }

