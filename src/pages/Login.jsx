import React, { useState } from "react";

// services
import Auth from "../services/Auth";

function Login() {
	let [login, setLogin] = useState({ email: undefined, password: undefined });

	const handleChange = (e) => {
		/**
		 * @param e input event parameter
		 */
		setLogin(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	}

	const handleSubmit = async (e) => {
		/**
		 * 
		 * @param e event parameter
		 * @returns jwt-token authorization
		 */
		e.preventDefault();
		try {
			let auth = await Auth.authenticate(login);
			console.log(auth);
			localStorage.setItem("authToken", auth.token);
			window.location.href = window.location.origin;
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="row justify-content-md-center">
			<div className="col-lg-4">
				<h4 className="display-4">Login</h4>
				<form id="loginForm" method="POST" onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							required
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="Enter your email"
							onChange={handleChange} />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							required
							type="password"
							id="password"
							className="form-control"
							name="password"
							placeholder="Enter your password"
							onChange={handleChange} />
					</div>
					<div className="form-group">
						<button className="btn btn-primary btn-block">Sign in</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login;