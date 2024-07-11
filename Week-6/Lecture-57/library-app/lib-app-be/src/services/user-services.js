const User = require("../models/User");

const InputValidationException = require("../exceptions/InputValidationException");

const addNewUser = async (user) => {

try {

user = new User(user);

await user.save();

console.log('User with ID: ${user._id} was added in the database.');

const token = user.generateToken();

return {user, token};

} catch (err) {

console.error('Please enter valid fields. The error is: $(err)');

throw new InputValidationException(err.message);

}
};

module.exports = {
addNewUser,
};