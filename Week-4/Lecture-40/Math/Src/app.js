require("./appMongoose");
const express = require("express");
const Task = require("./models/Task");
const app = express();

app.use(express.json());

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
});

app.get("/get-tasks", async(req, res) => {
  const taskList = await Task.find();
  return res.status(200).send(taskList);
   
});

app.put("/update/:taskId", async (req, res) => {

  const { taskId} = req.params;
  
  const updateResult = await Task.updateOne({_id: taskId},
    {
      $set: { ...req.body },
    }
  );
  if (!updateResult.matchedCount) {

    return res
    
    .status(404)
    
    .send({ message: 'Task with ID: ${taskId} was not found.' });
  }
    
    return res.status(200).send({ message: "Update Success" });
});

p.delete("/delete-task/:taskId", async (req, res) => {

  const { taskId } = req.params;
  
  const deleteResult = await Task.deleteOne({ _id: taskId });
  
  if (!deleteResult.deletedCount) {
  
    return res
  
     .status(404)
  
     .send({ message: 'Task with ID: ${taskId} was not found.` });
  
  }
  
  return res.status(200).send({ message: "Delete Success" });
 }) ;

app.listen(8080, () => {
  console.log('Server is running.`);

});