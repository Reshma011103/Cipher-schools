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
const logoutUserFunction = async () => {

   const response = await logoutUser();
    
    localStorage.removeItem('token');
    localStorage.removeItem('UserData');
    
    }
    
    const signupUserFunction = async (userData) => {
    
    const data = await signUpUser(userData);
    
    setUser(data);
    
    return data.user;
    
    };

    export {

        getUserToken,
        loginUserFunction as loginUser,
        signupUserFunction as signUpUser,
        getLocalStorageUser, 
        logoutUserFunction as logoutUser,
        
        };