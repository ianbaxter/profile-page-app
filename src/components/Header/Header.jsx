import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ firstName, lastName, loginHistory }) => (
  <div className="header-container">
    <div className="header-picture-container">
      <img
        id="header-picture"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      />
    </div>
    <div className="header-text-container">
      <input
        type="text"
        name="first-name"
        className="name-value"
        placeholder={firstName}
      ></input>
      <input
        type="text"
        name="last-name"
        className="name-value"
        placeholder={lastName}
      ></input>
      <div className="login-time-container">
        <p>Last logged in:</p>
        <p className="login-history-value">{loginHistory}</p>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  loginHistory: PropTypes.array.isRequired
};

export default Header;
