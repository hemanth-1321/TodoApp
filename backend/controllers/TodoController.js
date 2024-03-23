const TodoModel = require("../models/TodoModel");

// Function to get todos
async function getTodo(req, res) {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Function to save a new todo
async function saveTodo(req, res) {
  const { text } = req.body;
  TodoModel.create({ text })
    .then((data) => {
      console.log("Added successfully");
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
}

async function updateTodo(req, res) {
  const { _id, text } = req.body;
  TodoModel.findByIdAndUpdate(_id, { text })
    .then(() => {
      res.send("updated successuly");
    })
    .catch((err) => console.log(err));
}
async function deleteTodo(req, res) {
  const { _id } = req.body;
  TodoModel.findByIdAndDelete(_id)
    .then(() => {
      res.send("Dleted successuly");
    })
    .catch((err) => console.log(err));
}

// Export both functions
module.exports = { getTodo, saveTodo, updateTodo, deleteTodo };
