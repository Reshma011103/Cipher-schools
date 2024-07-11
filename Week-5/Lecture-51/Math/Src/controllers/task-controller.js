const Task = require(".../models/Task");

exports.addNewTask = async (req, res) => {

    try {
    
    const task = new Task({ ...req.body, owner: req.user.id});
    
    await task.save();
    
    return res.status(201).send({ message: "Saved" });
    
    } catch (err){
    
    console.error(err);
    
    return res.status (500).send({ message: err });
}
};
    
    exports.getTasksForUser = async (req, res) => {
    
    try {
    
    const taskList = await Task.find({ owner: req.user._id });
    
    return res.status(200).send(taskList);
    
    } catch (err) {
    
    console.error(err);
    
    return res.status(500).send({message: err });
    
    }
    
    };