import React, { useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import Bio from "../Bio/Bio";
import Friends from "../Friends/Friends";

const Profile = () => {
  const [firstName, setFirstName] = useState("Ian");
  const [lastName, setLastName] = useState("Baxter");
  const [dateOfBirth, setDateOfBirth] = useState("21/08/1994");
  const [favActivity, setFavActivity] = useState("Camping");
  const [favColour, setFavColour] = useState("#8dc63f");
  const [friendsList, setFriendsList] = useState(["Amy ", "Saul ", "Tom"]);
  const [loginHistory, setLoginHistory] = useState(["2019-12-13 12:05"]);

  return (
    <div className="profile-container">
      <Header
        firstName={firstName}
        lastName={lastName}
        loginHistory={loginHistory}
      />
      <Bio
        dateOfBirth={dateOfBirth}
        favActivity={favActivity}
        favColor={favColour}
      />
      <Friends friendsList={friendsList} />
    </div>
  );
};

export default Profile;
