import React from "react";

// components
import Profile from "../components/Profile";

//services
import Auth from "../services/Auth";

function Home(props) {
	if (Auth.isAuthenticated()) {
		return (
			<Profile />
		)
	}
	return (
		<div className="row justify-content-md-center">
			<div className="col-lg-6">
				<h3>Home</h3>
			</div>
		</div>
	)
}

export default Home;