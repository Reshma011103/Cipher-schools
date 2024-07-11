const userService = require("../services/user-service");
const InputValidationException = require("../exceptions/InputValidationException");
const User = require("../models/User");

const addNewUser = async (req, res) => {

try {

const { firstName, lastName, email, password, type } = req.body;

let user = {

firstName,

LastName,

email,

password,

type,

};

user = await userservice.addNewUser(user);



return res.status(200).send(user);

}catch (err) {

console.error(err);

return res

.status(err instanceof InputValidationException ? 400: 500)

.send({message: err.message});
}
};

 module.exports ={addNewUser, loginUser};