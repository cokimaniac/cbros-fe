import React from "react";

function Logout() {
    setTimeout(() => {
        window.localStorage.clear();
        window.location.href = window.location.origin;
    }, 1500);
    return (
        <div>
            <h4 className="display-5">Bye!</h4>
        </div>
    )
}

export default Logout;