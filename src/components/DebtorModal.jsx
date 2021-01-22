import React, { Fragment, useState } from "react";
// bootstrap components
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
// services
import Debtor from "../services/Debtor";

function DebtorModal(props) {

    const [debtor, setDebtor] = useState({ fullName: undefined, phoneNumber: undefined, email: undefined });
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let newDebtor = await Debtor.create(debtor);
            console.log(newDebtor);
        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (e) => {
        setDebtor(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    return (
        <Fragment>
            <button
            onClick={handleShow}
            title="Add a new Debtor"
            className="rounded-circle btn btn-danger">
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Debtor</Modal.Title>
                </Modal.Header>
                <form method="POST" id="newDebtorForm" onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="form-group">
                            <input
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="fullName"
                                name="fullName"
                                placeholder="Debtor full name" />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Debtor phone number" />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={handleChange}
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Debtor email" />
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

export default DebtorModal;