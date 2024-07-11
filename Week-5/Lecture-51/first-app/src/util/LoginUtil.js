import { loginUserApi } from "../apis/user-api";

export const loginUser = async ({ email, password }) => {

const {token} = await loginUserApi({ email, password }); localStorage.setItem("token", token);

};

export const getUserToken = () => {

return localStorage.getItem("token");

};
export const logoutUser = () => {
    localStorage.removeItem("token")
}