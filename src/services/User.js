import Auth from "./Auth";

class User {
    static async registration(data) {
        let url = "http://localhost:8000/users/signup";
        let response = await fetch(url, Auth.postHeader(data));
        return response.json();
    }

    static async profileInfo () {
        let url = "http://localhost:8000/users/profile";
        let response = await fetch(url, Auth.getHeader());
        return response.json();
    }
}

export default User;