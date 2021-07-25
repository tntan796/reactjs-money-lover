import axios from 'axios';
// import queryString from 'query-string';
import CONSTANTS from '../common/constants';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const instance = axios.create({
    baseURL: CONSTANTS.BASE_API,
    // paramsSerializer: (params) => queryString.stringify(params),
    headers: {
        Authorization:
            'Basic bW9iaWxlX3N1bnNoaW5ldHZfYXBwX3Byb2Q6RldTdVlOWHluY2VjZDgyeA==',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

instance.interceptors.request.use(async (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        };
    }

    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // eslint-disable-next-line no-console
        console.log('error', error);
        if (error.response && error.response.status === 401) {
            // actionRefreshToken();
            // Xử lí refreshtoken tại đây nếu bị lỗi 401
        }
    },
);

export default instance;
