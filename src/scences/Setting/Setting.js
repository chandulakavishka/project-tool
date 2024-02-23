import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, CssBaseline } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";

export const Setting = () => {
  const initalState = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phoneNum: "",
    description: "",
  }

  const [userData, setUserData] = useState(initalState);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get('https://localhost:7224/api/Users/2')
      .then((res) => {
        const data = res.data;
        console.log('hello',data);
        setUserData(data[0]);
      })
      .catch((err) => {
        console.log('err',err);
        setError(true);
      });
  }, []);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

    {console.log('userData',userData);}


  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      ...userData,
      city : userData.city,
      phoneNo : userData.phoneNo,
      description : userData.description,
    }

    // Make a Update request to the backend API to update the user data
    axios
      .put('https://localhost:7224/api/Users/2', formData)
      .then((response) => {
        alert('change successful')
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("can't change value error happen")
      });
  };

  const styles = {
    label: {
      display: "block",
      margin: "10px 0",
      fontWeight: "bold",
    },
    input: {
      display: "block",
      width: "90%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      marginBottom: "20px",
    },
  };
  
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
            padding: "30px 0 0 20px",
          }}
        >
          <Box sx={{ m: "30px 180px" }}>
            <form onSubmit={handleSubmit}>
              <label style={styles.label} htmlFor="firstName">
                First Name:
              </label>
              <input
                style={styles.input}
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
                placeholder={userData.firstName}
                disabled
              />

              <label style={styles.label} htmlFor="lastName">
                Last Name:
              </label>
              <input
                style={styles.input}
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
                placeholder={userData.lastName}
                disabled
              />

              <label style={styles.label} htmlFor="email">
                Email Address:
              </label>
              <input
                style={styles.input}
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder={userData.email}
                disabled
              />

              <label style={styles.label} htmlFor="city">
                City/Town:
              </label>
              <input
                style={styles.input}
                type="text"
                name="city"
                placeholder={userData.city}
                value={userData.city}
                onChange={handleInputChange}
              />

              <label style={styles.label} htmlFor="phoneNo">
                phone Number:
              </label>
              <input
                style={styles.input}
                type="text"
                name="phoneNo"
                placeholder={userData.phoneNo}
                value={userData.phoneNo}
                onChange={handleInputChange}
              />

              <label style={styles.label} htmlFor="description">
                Description:
              </label>
              <textarea
                style={styles.input}
                type="textarea"
                name="description"
                placeholder={userData.description}
                value={userData.description}
                onChange={handleInputChange}
              />

              <button
                style={styles.button}
                type="submit"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};
