class Auth {
    static authToken = localStorage.getItem("authToken");
    
    static isAuthenticated() {
        if (this.authToken === null) {
            return false;
        }
        return true;
    }

    static async authenticate(data) {
        let url = "http://localhost:8000/users/login";
        let response = await fetch(url, this.postHeader(data));
        return response.json();
    }

    static getHeader() {
        return {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "auth-token": this.authToken
            }
        }
    }

    static postHeader(data) {
        return {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    }
}

export default Auth;