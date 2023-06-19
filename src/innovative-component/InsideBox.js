import React from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LinearProgress from "@mui/material/LinearProgress";

const InsideBox = (props) => {
  const navigate = useNavigate();

  const click = () => {
    navigate("innovativetask/" + props.id);
  };
  return (
    <div onClick={click}>
      <div style={{ height: "50px" }}>
        <div style={{ width: "80%", float: "left" }}>
          <h2
            className="title"
            style={{
              textAlign: "left",
              margin: "0",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            {props.innovativeName}
          </h2>
        </div>
        <div style={{ width: "20%", float: "right" }}>
          <EditIcon style={{ fontSize: "1.2rem" }} />
          <MoreVertIcon style={{ fontSize: "1.2rem" }} />
        </div>
      </div>
      <div style={{ height: "50px" }}>
        <div
          style={{
            width: "30%",
            float: "left",
            fontSize: "0.8rem",
            textAlign: "start",
          }}
        >
          <p style={{ margin: "0" }}>Start date</p>
          <p style={{ fontWeight: "bold", margin: "0" }}>{props.startDate}</p>
        </div>
        <div style={{ width: "30%", float: "left", fontSize: "0.8rem" }}>
          <p style={{ margin: "0" }}>Status</p>
          <p
            style={{
              margin: "0",
              color:
                props.status === "Active"
                  ? "#00FF00"
                  : props.status === "Inactive"
                  ? "#FF0000"
                  : "#FFDC00",
              fontWeight: "bold",
            }}
          >
            {props.status}
          </p>
        </div>
        <div style={{ width: "40%", float: "right" }}>
          <div
            style={{
              width: "45%",
              float: "left",
              fontSize: "0.8rem",
              backgroundColor: "#EBEEF1",
              borderRight: "1px solid black",
            }}
          >
            <p style={{ margin: "0" }}>{props.tasks}</p>
            <p style={{ margin: "0" }}>Tasks</p>
          </div>
          <div
            style={{
              width: "45%",
              float: "left",
              fontSize: "0.8rem",
              backgroundColor: "#EBEEF1",
            }}
          >
            <p style={{ margin: "0" }}>{props.users}</p>
            <p style={{ margin: "0" }}>Users</p>
          </div>
        </div>
      </div>
      <div style={{ height: "50px" }}>
        <div>
          <p style={{ margin: "0", textAlign: "left", fontWeight: "bold" }}>
            Members
          </p>
          <div style={{ textAlign: "left", display: "flex" }}>
            {props.members.map((member) => {
              return (
                <div key={member.id}>
                  <img
                    src={member.imgUrl}
                    alt="member"
                    style={{
                      height: "25px",
                      width: "25px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                </div>
              );
            })}
            <AddCircleOutlineIcon />
          </div>
        </div>
        <div></div>
      </div>
      <div style={{ height: "50px" }}>
        <div style={{ display: "flex" }}>
          <p
            style={{
              margin: "0",
              textAlign: "left",
              width: "75%",
              fontWeight: "bold",
            }}
          >
            Progress
          </p>
          <p style={{ margin: "0", textAlign: "right", width: "25%" }}>
            {props.progress}%
          </p>
        </div>
        <div>
          <LinearProgress
            variant="determinate"
            value={parseInt(props.progress)}
            sx={{
              borderRadius: "5px",
              height: "5px",
              backgroundColor: "#EBEEF1",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InsideBox;
