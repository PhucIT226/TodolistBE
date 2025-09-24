const Todo = require("../model/todoModel");

const getTodos = async (req, res) => {
  try {
    const todo = await Todo.find();
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = await new Todo({ title });
    await newTodo.save();
    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const update = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );
    if (!update) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(update);
    console.log(update);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    return res.status(202).end();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
