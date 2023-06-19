import React from "react";
import Styles from "./FilterBox.module.css";
import AddIcon from "@mui/icons-material/Add";

const FilterBox = (props) => {
  return (
    <div className={Styles.FilterBox}>
      <div className={Styles.Filter}>
        <div className={Styles.AddDiv}>
          <button className={Styles.AddButton} onClick={props.boxopen}>
            <AddIcon />
            New
          </button>
        </div>
        <div>
          <div className={Styles.SelectBox}>
            <label htmlFor="year" className={Styles.SelectLabel}>
              Year
            </label>
            <select name="year" id="year" className={Styles.SelectButton}>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div className={Styles.SelectBox}>
            <label htmlFor="active" className={Styles.SelectLabel}>
              Inactive
            </label>
            <select name="active" id="active" className={Styles.SelectButton}>
              <option value="all">All</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div className={Styles.SelectBox}>
            <label htmlFor="quator" className={Styles.SelectLabel}>
              Quator
            </label>
            <select name="quator" id="quator" className={Styles.SelectButton}>
              <option value="Quator">Quator</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div className={Styles.SelectBox}>
            <label htmlFor="layer" className={Styles.SelectLabel}>
              Execution Layer
            </label>
            <select name="layer" id="layer" className={Styles.SelectButton}>
              <option value="Layer">Layer</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div className={Styles.SelectBox}>
            <label htmlFor="department" className={Styles.SelectLabel}>
              Department
            </label>
            <select
              name="department"
              id="department"
              className={Styles.SelectButton}
            >
              <option value="department">Department</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div className={Styles.SelectBox}>
            <label htmlFor="innovatives" className={Styles.SelectLabel}>
              Innovatives
            </label>
            <select
              name="innovatives"
              id="innovatives"
              className={Styles.SelectButton}
            >
              <option value="innovatives">Innovatives</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div className={Styles.SelectBox}>
            <label htmlFor="cooobjects" className={Styles.SelectLabel}>
              Cooperative Objects
            </label>
            <select
              name="cooobjects"
              id="cooobjects"
              className={Styles.SelectButton}
            >
              <option value="Cooperative Obj">Cooperative Obj</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div className={Styles.SelectBox}>
            <label htmlFor="user" className={Styles.SelectLabel}>
              Users
            </label>
            <select name="user" id="user" className={Styles.SelectButton}>
              <option value="Users">Users</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
      </div>
      <div className={Styles.Filter}>
        <p>Progress Of Key Results</p>
        <select name="user" id="user" className={Styles.SelectCategory}>
          <option value="Category">Category</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBox;
