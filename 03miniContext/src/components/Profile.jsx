import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { userData } = useContext(UserContext);
  console.log(userData);

  if (!userData) return <div className="text-center">Please login</div>;
  else {
    return <div className="text-center">Welcome {userData.name}</div>;
  }
};

export default Profile;
