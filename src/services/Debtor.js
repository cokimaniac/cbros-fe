import Auth from "./Auth";

class Debtor {
    static async list() {
        let url = "http://localhost:8000/debtors";
        let response = await fetch(url, Auth.getHeader());
        return response.json();
    }
}

export default Debtor