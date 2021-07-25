import axios from "axios";
import CONSTANTS from "../common/constants";
class AuthService {

  login(Username: string, Password: string) {
    return axios.post(CONSTANTS.BASE_API + "/authenticate", { Username, Password });
  }

  logout() {
    sessionStorage.removeItem(CONSTANTS.TOKEN);
    sessionStorage.removeItem(CONSTANTS.USER_NAME);
    sessionStorage.removeItem(CONSTANTS.USER_ID);
  }
}

export default new AuthService();