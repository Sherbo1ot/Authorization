import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../provider/AuthProvider";

import "./Auth.scss";
import pic from "../../assets/prog-lang.gif";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const validation = () => {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    const erorrText = document.getElementById("errText");
    const linkText = document.querySelector(".link");

    if (passwordInput.length < 4 || passwordInput.length > 15) {
      erorrText.innerText = `Password must contain at
        least 4 and
        no more than 10 characters`;
      linkText.innerText = "";
    } else {
      erorrText.innerText = ``;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validation();
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
          <img className="logo" src={pic} alt="Logo" />
          <h2 className="form_title">
            Sign <span>Up</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <br />
          <input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <br />

          <div>
            <button>Sign Up</button>
          </div>

          <div id="errText"></div>

          <Link className="link" to="/login">
            If you have an account - <span>Sign In.</span>
          </Link>
        </form>
      </div>
    </>
  );
};
