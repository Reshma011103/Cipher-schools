const { verifyToken } = require("../jwt");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {

// {authorization: "Bearer <token>"}

const { authorization } = req.headers;

const token = authorization.substring(7);

const { isValidToken, payload } = verifyToken (token);

if (isValidToken) {

console.log('Token is valid!');
const user = await User.findOne({ _id: payload._id })
req.token = token;
req.user = user;

next();

} else {

console.warn('Token is invalid');

return res.status(403).send({message: "Please use a valid token!" });

}
};

module.exports = authMiddleware;