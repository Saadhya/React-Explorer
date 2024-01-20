import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { userData } = useContext(UserContext);
  if (!userData) return <div className="text-center">Please login</div>;
  else {
    return <div className="text-center">Welcome {userData}</div>;
  }
};

export default Profile;
