import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../provider/AuthProvider";
import "./Auth.scss";

import pic from "../../assets/react.svg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      alert("Incorrect Password or Email!");
    }
  };

  return (
    <>
      <div className="form-main">
        <div>
          <h2 className="form_title">Sing In</h2>
        </div>
        <form className="form" onSubmit={handleSubmit}>
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

          <Link className="link" to="/Registration">
            If you don't have an account - Sign Up.
          </Link>
        </form>
      </div>
    </>
  );
};
