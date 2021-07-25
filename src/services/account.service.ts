import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";

class AccountService {
  async login(username: string, password: string) {
    const response = await axios.post(API_URL + "signin", { username, password });
  }
}

export default new AccountService();