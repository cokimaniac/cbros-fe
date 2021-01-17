import React, { useState, useEffect } from "react";

// services
import User from "../services/User";

function Signup() {
	const [register, setRegister] = useState({
		fullName: undefined,
		userName: undefined,
		phoneNumber: undefined,
		email: undefined,
		password: undefined,
	});

	const [confirmation, setConfirmation] = useState(undefined);

	const handleSubmit = async (e) => {
		/**
		 * @param e event form parameter
		 */
		e.preventDefault();
		if (register.password === confirmation) {
			try {
				let signup = await User.registration(register);
				console.log(signup);
			} catch (err) {
				console.error(err)
			}
		}
	}
	
	const handleChange = (e) => {
		/**
		 * @param e input event parameter
		 */
		setRegister((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	}

	const handleConfirmationChange = (e) => {
		setConfirmation(e.target.value);
		let feedback = e.target.nextElementSibling;
		if (register.password !== undefined) {
			if (register.password === e.target.value) {
				e.target.classList.remove("is-invalid");
				e.target.classList.toggle("is-valid");
				feedback.classList.remove("invalid-feedback");
				feedback.classList.toggle("valid-feedback");
				feedback.innerText = "Great! Password confirmation match";
			} else {
				e.target.classList.remove("is-valid");
				e.target.classList.toggle("is-invalid");
				feedback.classList.remove("valid-feedback");
				feedback.classList.add("invalid-feedback");
				feedback.innerText = "Password confirmation does not match";
			}
		}
	}

	useEffect(() => {
		console.log(register);
		console.log(confirmation);
	}, [register, confirmation]);


	return (
		<div className="row justify-content-md-center">
			<div className="col-lg-4">
				<h4 className="display-4">Signup</h4>
				<form id="signupForm" method="POST" onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="fullName">Full Name</label>
						<input
							onChange={handleChange}
							type="text"
							className="form-control"
							id="fullName"
							name="fullName"
							placeholder="Enter your full name" />
					</div>
					<div className="form-row">
						<div className="form-group col-lg">
							<label htmlFor="userName">Username</label>
							<input
								onChange={handleChange}
								id="userName"
								type="text"
								className="form-control"
								name="userName"
								placeholder="Enter a username" />
						</div>
						<div className="form-group col-lg">
							<label htmlFor="phoneNumber">Phone Number</label>
							<input
								onChange={handleChange}
								type="text"
								className="form-control"
								id="phoneNumber"
								name="phoneNumber"
								placeholder="Enter your phone number" />
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							onChange={handleChange}
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="Enter your email" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							onChange={handleChange}
							type="password"
							id="password"
							className="form-control"
							name="password"
							placeholder="Enter your password" />
					</div>
					<div className="form-group">
						<label htmlFor="passConfirmation">Confirm Password</label>
						<input
							onChange={handleConfirmationChange}
							type="password"
							id="passConfirmation"
							className="form-control"
							name="passConfirmation"
							placeholder="Enter your password" />
						<div></div>
					</div>
					<div className="form-group">
						<button className="btn btn-success btn-block">Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Signup;