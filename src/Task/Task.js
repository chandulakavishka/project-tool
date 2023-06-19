import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import AddIcon from "@mui/icons-material/Add";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import TaskStyle from "./Task.module.css";

const Task = () => {
  const taskValue = [
    {
      id: 1,
      taskName: "Copywriting",
      assignees: [
        {
          id: 1,
          imgUrl:
            "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        },
        {
          id: 2,
          imgUrl:
            "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",
        },
      ],
      dueDate: "2023/06/30",
      progrees: "50",
    },
    {
      id: 2,
      taskName: "Illustrations",
      assignees: [
        {
          id: 1,
          imgUrl:
            "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        },
        {
          id: 2,
          imgUrl:
            "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",
        },
        {
          id: 3,
          imgUrl:
            "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",
        },
        {
          id: 4,
          imgUrl:
            "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",
        },
      ],
      dueDate: "2023/06/30",
      progrees: "50",
    },
    {
      id: 3,
      taskName: "UI Design",
      assignees: [
        {
          id: 1,
          imgUrl:
            "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        },
        {
          id: 2,
          imgUrl:
            "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",
        },
      ],
      dueDate: "2023/06/30",
      progrees: "50",
    },
  ];

  const addNewTask = () => {
    console.log("addNewTask");
  };

  return (
    <div className={TaskStyle.boxStyle}>
      <div>
        <div className={TaskStyle.head}>
          <div className={TaskStyle.headName}>
            <h2>Task Progress</h2>
            <p>Owner: Kasun Tharaka</p>
          </div>
          <div className={TaskStyle.progressBox}>
            <p>Over roll Progress</p>
            <LinearProgress
              variant="determinate"
              // value={parseInt(props.progress)}
              value="50"
              sx={{
                borderRadius: "5px",
                height: "10px",
                backgroundColor: "#EBEEF1",
              }}
            />
          </div>
        </div>
        <div className={TaskStyle.addTask} onClick={addNewTask}>
          <AddIcon sx={{ paddingRight: "5px", fontWeight: "bold" }} />
          <p>New Key Result Action</p>
        </div>
      </div>
      <div className={TaskStyle.tableDiv}>
        <table style={{ width: "100%" }}>
          <tr className={TaskStyle.headRow}>
            <th style={{ textAlign: "end" }}>Key result Action</th>
            <th style={{ textAlign: "end" }}>Assignees</th>
            <th>Due Date</th>
            <th style={{ width: "200px" }}>Progress</th>
            <th></th>
            <th></th>
          </tr>
          {taskValue.map((value) => {
            return (
              <tr key={value.id}>
                <td className={TaskStyle.taskName}>{value.taskName}</td>
                <td className={TaskStyle.imgDiv}>
                  {value.assignees.map((assignee) => {
                    return (
                      <div key={assignee.id}>
                        <img
                          src={assignee.imgUrl}
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
                  <AddCircleOutlineOutlinedIcon />
                </td>
                <td className={TaskStyle.selectTD}>
                  <select
                    name="dueDate"
                    id="dueDate"
                    className={TaskStyle.SelectButton}
                  >
                    <option value="1">Due Date</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
                </td>
                <td className={TaskStyle.progreesTD}>
                  <LinearProgress
                    variant="determinate"
                    value={value.progrees}
                    sx={{
                      width: "100%",
                      borderRadius: "5px",
                      height: "8px",
                      backgroundColor: "#EBEEF1",
                    }}
                  />
                </td>
                <td className={TaskStyle.progreesValueTD}>{value.progrees}%</td>
                <td className={TaskStyle.iconTD}>
                  <div>
                    <MessageOutlinedIcon />
                  </div>
                  <div>
                    <AccessAlarmOutlinedIcon />
                  </div>
                  <div>
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Task;
