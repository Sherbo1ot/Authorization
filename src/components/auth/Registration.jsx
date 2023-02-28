import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../provider/AuthProvider";

import "./Auth.scss";
import pic from "../../assets/react.svg";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      alert("This account already exists!");
    }
  };

  return (
    <>
      <div className="form-main">
        <div>
          <h2 className="form_title">Sing Up</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <br />

          <div>
            <button>submit</button>
          </div>

          <Link className="link" to="/login">
            If you have an account - Sing In.
          </Link>
        </form>
      </div>
    </>
  );
};
