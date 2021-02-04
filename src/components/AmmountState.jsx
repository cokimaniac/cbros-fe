import React, { useState, useEffect } from "react";

// services
import Ammount from "../services/Ammount";

const AmmountState = (props) => {
    let [paid, setPaid] = useState(props.state);
    let [isReady, setIsReady] = useState(false);

    const handleClick = () => {
        setPaid(!paid);
    }

    if (paid) {
        return (
            <button onClick={ handleClick } className="badge badge-success">Paid</button>
        )
    }
    return <button onClick={ handleClick } className="badge badge-danger">Debt</button>
}

export default AmmountState;