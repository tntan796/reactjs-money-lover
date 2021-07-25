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

//   register(username, email, password) {
//     return axios.post(API_URL + "signup", {
//       username,
//       email,
//       password,
//     });
//   }

//   authHeader() {
//     const user = JSON.parse(localStorage.getItem('user'));

//     if (user && user.accessToken) {
//       return { Authorization: 'Bearer ' + user.accessToken };
//     } else {
//       return {};
//     }
//   }
}

export default new AuthService();