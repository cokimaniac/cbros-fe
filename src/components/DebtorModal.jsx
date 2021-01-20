import React, { Fragment, useState } from "react";
// bootstrap components
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function DebtorModal(props) {

    const [debtor, setDebtor] = useState({ fullName: undefined, phoneNumber: undefined });
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(debtor);
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
                    <Modal.Title>Modal heading</Modal.Title>
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