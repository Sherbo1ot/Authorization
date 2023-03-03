import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../provider/AuthProvider";

import "./Auth.scss";
import pic from "../../assets/Sherbolot.jpg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const validation = () => {
    const emailInputValue = document.getElementById("email").value;
    const passwordInputValue = document.getElementById("password").value;

    const passwordInput = document.getElementById("password");

    const erorrText = document.getElementById("errText");
    const linkText = document.querySelector(".link");

    if (passwordInputValue.length < 4 || passwordInputValue.length > 15) {
      erorrText.innerText = `Password must contain at
        least 4 and
        no more than 10 characters`;
      linkText.innerText = "";
    } else {
      linkText.innerText = ``;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validation();
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
          <img className="logo" src={pic} alt="Logo" />
          <h2 className="form_title">
            Sign <span>In</span>
          </h2>
        </div>
        <form className="form" onSubmit={handleSubmit}>
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
            <button>Sign In</button>
          </div>

          <div id="errText"></div>

          <Link className="link" to="/Registration">
            If you don't have an account - <span>Sign Up.</span>
          </Link>
        </form>
      </div>
    </>
  );
};
