import React from "react";
import PropTypes from "prop-types";
import "./Friends.css";

const Friends = ({ friendsList }) => {
  // Create a list of friend's profiles with avatar and name from friendsList
  const friendsProfileList = friendsList.map(friend => (
    <div key={friend} className="friend-container">
      <img
        className="friend-picture"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="Friend Profile"
      />
      <p>{friend}</p>
    </div>
  ));

  return (
    <div className="friends-container">
      <p id="friends-title">Friends</p>
      <div className="friends-list-container">{friendsProfileList}</div>
    </div>
  );
};

Friends.propTypes = { friendsList: PropTypes.array };

export default Friends;
