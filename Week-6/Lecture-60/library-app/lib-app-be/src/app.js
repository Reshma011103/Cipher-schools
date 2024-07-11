require("./appMongoose");

const express = require("express");

const cors= require("cors");

const userRoute = require("./routes/user-route");

const bookRoute = require("./routes/book-route");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/user", userRoute);

app.use("/book", bookRoute);

app.listen(8080, () => {
  console.log('Library App Backend is running on Port 8880`); 
  
});