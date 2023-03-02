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
      alert("You are logged out");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <div className="form-main">
        <h2 className="title-home">
          The site is under construction! <br />
          by: Sherbolot Arbaev
        </h2>
        <h1>Welcome to website!</h1>
        <p>Your Email: {user && user.email}</p>

        <div className="buttons">
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
