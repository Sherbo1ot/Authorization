import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../provider/AuthProvider";

export const ProtectedRoute = ({ children }) => {
	const { user } = UserAuth();

	if (!user) {
		return (
			<>
				<Navigate to="/login" />
			</>
		);
	}
	return children;
};
