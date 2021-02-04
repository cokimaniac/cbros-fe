import React, { Fragment, Component } from "react";

// service
import Ammount from "../services/Ammount";
import Debtor from "../services/Debtor";

// component
import AmmountState from "../components/AmmountState";

class Ammounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ammounts: [],
            debtor: {},
            isReady: false,
        };
    }

    componentDidMount() {
        const { debtorId } = this.props.match.params;

        const fetchDebtor = async () => {
            const result = await Debtor.retrieve(debtorId);
            this.setState({ debtor: result });
            this.setState({ isReady: true });
        }
        const fetchAmmounts = async () => {
            const result = await Ammount.list(debtorId);
            this.setState({ ammounts: result });
            this.setState({ isReady: true });
        }
        fetchDebtor();
        fetchAmmounts();
    }

    render() { 
        if (this.state.isReady) {
            return (
                <Fragment>
                    <div>
                        <h2 className="display-5">{ this.state.debtor.fullName }</h2>
                        <h4 className="display-4">Ammounts</h4>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">ammount</th>
                                <th scope="col">paid</th>
                                <th scope="col">period (months)</th>
                                <th scope="col">loan date</th>
                                <th scope="col">payment date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ammounts.map(item => (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.money}</td>
                                    <td><AmmountState state={ item.paid} /></td>
                                    <td>{item.debtPeriod}</td>
                                    <td>{item.debtDate}</td>
                                    <td>{ item.debtPaymentDate }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Fragment>
            )
        }
        return (
            <h2>Loading...</h2>
        )
    }

}

export default Ammounts;