import { loginUser } from "../apis/user-api";

const getUserToken = () => {

return localStorage.getItem("token");

};

const setUser = (data) => {

localStorage.setItem("token", data.token);

localStorage.setItem("user", data.user);
};


const loginUserFunction = async ({ email, password }) => {



const data = await loginUser({ email, password });



setUser(data);



return data.user;
};

export { getUserToken, loginUserFunction as loginUser };