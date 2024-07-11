const { connect } = require("mongoose");
const MONGO_URL = "mongodb+srv://rhreshma15:<rhreshma15>@cluster0.yjrnnx0.mongodb.net"
const DB_NAME = 'cs-mern'
async function connectDb() {
 try{
 await connect('${MONGO_URL}/${DB_NAME');
 console.log('MongoDb Connected.')
 }catch(err) {
    console.error(err);
 }
 }
connectDb();