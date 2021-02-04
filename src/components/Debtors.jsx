import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons'

// services
import Debtor from "../services/Debtor";
// components
import DebtorModal from "./DebtorModal";
import AmmountModal from "./AmmountModal";

function Debtors(props) {

    const [debtors, setDebtors] = useState([]);

    useEffect(() => {
        const fetchDebtors = async () => {
            const result = await Debtor.list();
            setDebtors(result);
        }
        fetchDebtors();
    }, []);
        
    return (
        <Fragment>
            <h4 className="display-5">
                Debtors&nbsp;<DebtorModal />
            </h4>
            <ul className="list-group">
                {debtors.map(item => (
                    <li className="list-group-item" key={item._id}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg">
                                    <h5 className="card-title">
                                        <a href={"tel:" + item.phoneNumber}>
                                            <FontAwesomeIcon icon={faPhone} />
                                        </a>&nbsp; {item.fullName}
                                    </h5>
                                    <p className="card-text">
                                        Debts: {item.ammounts.length > 3 ?
                                            (<Link to={`/ammounts/${item._id}`}>
                                                <span className="badge badge-danger">{item.ammounts.length}</span>
                                            </Link>) :
                                            (<Link to={`/ammounts/${item._id}`}>
                                                <span className="badge badge-primary">{item.ammounts.length}</span>
                                            </Link>)}
                                    </p>
                                </div>
                                <div className="col-lg-3">
                                    <AmmountModal debtorID={item._id} />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}
export default Debtors;