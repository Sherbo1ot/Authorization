import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../provider/AuthProvider";

import "./Auth.scss";
import pic from "../../assets/devx-logo.webp";

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
          <img src={pic} alt="Logo" width={160} />
          <h2 className="form_title">
            Sign <span>Up</span>
          </h2>
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
            If you have an account - <span>Sign In.</span>
          </Link>
        </form>
      </div>
    </>
  );
};
