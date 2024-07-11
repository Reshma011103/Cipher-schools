require("./appMongoose");
const express = require("express");
const Task = require("./models/Task");
const app = express();

app.get("/", (req, res) => {
  res.send("This is some response from your first Node.js server");

});

app.get("/add", (req, res) => {
    let { a: firstNumber, b: secondNumber } = req.params;
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    res.send({ sum });
});

app.post("/add-task", async (req, res) => {
  const task = new Task({title: "Test Task", description:"Test task desc"})
  await task.save();
  return res.status(200).send({Message: "saved!"})
})

app.listen(8080, () => {
  console.log('Server is running.`);

});