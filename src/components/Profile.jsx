import React, { Component } from "react";

// components
import Debtors from "./Debtors";

// services
import User from "../services/User";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        try {
            let info = await User.profileInfo();
            this.setState(info);
        }catch(err)  {
            console.error(err);
        }
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-lg-3">
                    <Debtors />
                </div>
                <div className="col-lg-6">
                    <h3 className="display-4">Hi {this.state.fullName}</h3>
                </div>
            </div>
        )
    }
}

export default Profile;