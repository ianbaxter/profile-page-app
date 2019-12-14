import React from "react";
import PropTypes from "prop-types";
import "./Bio.css";

const Bio = ({ dateOfBirth, favActivity, favColor }) => {
  let favColorCircleStyle = { background: favColor };

  return (
    <div className="bio-container">
      <div className="bio-stats-container">
        <div className="stat-container">
          <p className="stat-label">Date of Birth:</p>
          <input
            type="text"
            name="date-of-birth"
            id="bio-birth-text"
            className="stat-value"
            placeholder={dateOfBirth}
          ></input>
        </div>
        <div className="stat-container">
          <p className="stat-label">
            Favourite
            <br />
            Activity:
          </p>
          <input
            type="text"
            name="favourite-activity"
            className="stat-value"
            placeholder={favActivity}
          ></input>
        </div>
        <div className="stat-container">
          <p className="stat-label">
            Favourite
            <br />
            Colour:
          </p>
          <div style={favColorCircleStyle} id="fav-color-circle"></div>
        </div>
      </div>
      <div className="bio-about-container">
        <p id="bio-about-title">About Me</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
};

Bio.propTypes = {
  dateOfBirth: PropTypes.string.isRequired,
  favActivity: PropTypes.string.isRequired,
  favColor: PropTypes.string.isRequired
};

export default Bio;
