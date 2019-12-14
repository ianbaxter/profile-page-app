import React from "react";
import PropTypes from "prop-types";
import "./Friends.css";

const Friends = ({ friendsList }) => (
  <div className="friends-container">
    <p className="friends-title">Friends</p>
    <p className="friends-list">{friendsList}</p>
  </div>
);

Friends.propTypes = { friendsList: PropTypes.array.isRequired };

export default Friends;
