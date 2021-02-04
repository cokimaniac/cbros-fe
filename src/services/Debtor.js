import Auth from "./Auth";

class Debtor {
    static async list() {
        let url = "http://localhost:8000/debtors";
        let response = await fetch(url, Auth.getHeader());
        return response.json();
    }

    static async create(data) {
        let url = "http://localhost:8000/debtors";
        let response = await fetch(url, Auth.postHeader(data));
        return response.json();
    }

    static async retrieve(debtorId) {
        let url = `http://localhost:8000/debtors/${debtorId}`;
        let response = await fetch(url, Auth.getHeader());
        return response.json();
    }
}

export default Debtor