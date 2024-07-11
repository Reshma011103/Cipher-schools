import axios from "axios";

import { getUserToken } from "../utils/AuthUtil";
 const LibraryApplicationBackend = axios.create({

baseURL: 'http://localhost:8080',

});

LibraryApplicationBackend.interceptors.request.use(

(config) => {

const token = getUserToken();

if (token) {

config.headers = { Authorization: 'Bearer ${token}' };

console.log("Inside interceptor");
}

return config;

},

(error) => { 

return Promise.reject(erroг);
}
);
export default LibraryApplicationBackend;