import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../provider/AuthProvider";

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
			alert("Неверный логин или пароль!");
		}
	};

	return (
		<>
			<div>
				<img src={pic} alt="Workflow" />
				<h2>Sing In</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<label>
					Email
				</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email address"
				/>
				<br />
				<label>Password</label>
				<input
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<br />
				<Link to="/Registration">sing up</Link>
				<div>
					<button>submit</button>
				</div>
			</form>
		</>
	);
};
