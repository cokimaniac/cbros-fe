import React, { Component, Fragment } from "react";

// services
import Debtor from "../services/Debtor";

class Debtors extends Component {
    constructor(props) {
        super(props);
        this.state = undefined;
    }
    async componentDidMount() {
        try {
            let debtors = await Debtor.list();
            this.setState(debtors);
        } catch (err) {
            console.error(err)
        }
    }

    componentDidUpdate() {
        console.log(this.state)
    }
    render() {
        return (
            <Fragment>
                <h4 className="display-5">Debtors</h4>
                <ul className="list-group">
                    
                </ul>
            </Fragment>
        );
    }
}

export default Debtors;