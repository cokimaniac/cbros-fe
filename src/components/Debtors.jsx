import React, { Fragment, useEffect, useState } from "react";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPlus } from '@fortawesome/free-solid-svg-icons'

// services
import Debtor from "../services/Debtor";
// components
import DebtorModal from "./DebtorModal";

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
                        <div className="card-w-75">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href={"tel:" + item.phoneNumber}>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </a>&nbsp; {item.fullName}
                                </h5>
                                <p className="card-text">
                                    Debts: {item.ammounts.length > 3 ? (<span className="badge badge-danger">{item.ammounts.length}</span>) : (<span className="badge badge-primary">{item.ammounts.length}</span>) }
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}
export default Debtors;