import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../provider/AuthProvider";

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
			<div>
				<h1>Аккаунт</h1>
				<p>Ваш Email: {user && user.email}</p>

				<button onClick={handleLogout}>Выход из системы</button>
			</div>
		</>
	);
};
