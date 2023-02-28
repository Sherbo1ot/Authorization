import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../provider/AuthProvider";
import "./Auth.scss";

export const Logout = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="form-main">
        <h1>Account:</h1>
        <p>Your Email: {user && user.email}</p>

        <div>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};
