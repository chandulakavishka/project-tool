import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { Margin } from "@mui/icons-material";

const NotificationPanel = () => {
  const current = new Date();
  const date = `${current.getDate()} ${
    current.getMonth() + 1
  } ${current.getFullYear()}`;
  const [data, setData] = useState(new Date());

  useEffect(() => {
    axios
      .get("https://localhost:7224/api/Notification")
      .then((res) => {
        console.log("Getting Backend Tasks data", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let month = new Date().getMonth();
  let gethours = new Date().getHours();
  let hours = new Date().getHours();
  if (hours === 0) {
    hours += 12;
  } else if (hours > 12) {
    hours -= 12;
  }
  return (
    <>
      <Box width="100%">
        <Typography variant="h4" textAlign="center" marginLeft="10px">
          <b>Notifications</b>
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 160,
          backgroundColor: "#163a78",
          borderRadius: "15px",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <Box>
          <Box padding="10px 30px">
            <Box>
              <Box display="flex">
                <Box>
                  <img
                    width="60px"
                    height="60px"
                    src="../../images/note.png"
                    alt="icon"
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    color="white"
                    marginLeft="40px"
                    marginTop="8px"
                    width="250px"
                  >
                    You Were Assign New Task
                  </Typography>
                  <Typography
                    variant="p"
                    color="white"
                    align="left"
                    marginLeft="50px"
                  >
                    {new Date().getDate()} {months[month]}{" "}
                    {new Date().getFullYear()} - {hours}:
                    {new Date().getMinutes()} {gethours > 12 ? "pm" : "am"}
                  </Typography>
                  <Box align="left" marginLeft="45px" marginTop={2}>
                    <Link
                      to="./projects"
                      onClick={() => {
                        localStorage.setItem("header", "Projects");
                      }}
                    >
                      <Button
                        sx={{
                          width: 130,
                          height: 40,
                          backgroundColor: "#b89842",
                          flexGrow: 0,
                          borderRadius: "10px",
                        }}
                      >
                        Assign Now
                      </Button>
                    </Link>
                  </Box>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    width: "120px",
                    height: "120px",
                    marginLeft: "190px",
                    borderRadius: "50%",
                    marginTop: "40px",
                    border: "2px solid white",
                    zIndex: 2,
                    backgroundColor: "#163a78 ",
                    position: "absolute",
                    right:'20%',
                    top:'15%'
                  }}
                >
                  <img
                    width={80}
                    marginTop="400px"
                    src="../../images/notes.png"
                    alt=""
                    style={{ margin: "auto" }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    width: "150px",
                    height: "140px",
                    borderRadius: "50%",
                    marginLeft: "-60px",
                    marginTop: "25px",
                    border: "2px solid white",
                    zIndex: 1,
                    backgroundColor: "#163a78 ",
                    position: "absolute",
                    right:'6%',
                    top:'15%'
                  }}
                >
                  <img
                    width={115}
                    src="../../images/notepad.png"
                    alt=""
                    style={{ margin: "auto", marginLeft: "40px" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default NotificationPanel;

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
