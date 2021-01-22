import Auth from "./Auth";

class Debtor {
    static async list(debtorID) {
        let url = `http://localhost:8000/debtors/${debtorID}`;
        let response = await fetch(url, Auth.getHeader());
        return response.json();
    }

    static async create(data, debtorID) {
        let url = `http://localhost:8000/debtors/${debtorID}`;
        let response = await fetch(url, Auth.postHeader(data));
        return response.json();
    }
}

export default Debtor