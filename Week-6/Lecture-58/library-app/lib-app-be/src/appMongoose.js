const { connect } = require("mongoose");

const MONGO_DB_URL =

"mongodb+srv://root:roota@tutoraccluster.udjbnbd.mongodb.net";

const DB_NAME = "cs-library-app";

const connectDb = async () => {
  try {
    await connect('${MONGO_DB_URL}/${DB_NAME}');
    console.log('MongoDB Connection is successful.');
} catch (err) {
   console.error(err);
 }
};

connectDb();

module.exports = {};