import React, { Fragment, useState } from "react";
// bootstrap components
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
// services
import Ammount from "../services/Ammount";

function AmmountModal(props) {

    const [ammount, setAmmount] = useState({ money: undefined, debtPeriod: undefined });
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let newAmmount = await Ammount.create(ammount, props.debtorID);
            console.log(newAmmount);
        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (e) => {
        setAmmount(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    return (
        <Fragment>
            <button
            onClick={handleShow}
            title="Add ammount"
            className="btn btn-success btn-sm justify-content-md-end ml-4 rounded-circle">
                <FontAwesomeIcon icon={faDollarSign} />
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Ammount</Modal.Title>
                </Modal.Header>
                <form method="POST" id="newAmmountForm" onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="form-group">
                            <input
                                onChange={handleChange}
                                type="number"
                                className="form-control"
                                id="money"
                                name="money"
                                placeholder="Debtor ammount $" />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={handleChange}
                                type="number"
                                className="form-control"
                                id="debtPeriod"
                                name="debtPeriod"
                                placeholder="Debt period (in months)" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <button className="btn btn-primary" type="submit">Save</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </Fragment>
    )
}

export default AmmountModal;