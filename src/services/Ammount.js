import Auth from "./Auth";

class Ammount {
    static async list(debtorID) {
        let url = `http://localhost:8000/debtors/${debtorID}/ammounts`;
        let response = await fetch(url, Auth.getHeader());
        return response.json();
    }

    static async create(data, debtorID) {
        let url = `http://localhost:8000/debtors/${debtorID}/ammounts`;
        let response = await fetch(url, Auth.postHeader(data));
        return response.json();
    }

    static async modify(debtorID, ammountID, state) {
        let url = `http://localhost:8000/debtors/${debtorID}/ammounts/${ammountID}?state=${state}`;
        let response = await fetch(url, Auth.patchHeader());
        return response.json();
    }

    static async retrieve(debtorID, ammountID) {
        let url = `http://localhost:8000/debtors/${debtorID}/ammounts/${ammountID}`;
        let response = await fetch(url, Auth.getHeader());
        return response.json();
    }
}

export default Ammount