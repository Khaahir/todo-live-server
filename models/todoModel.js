import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  uppgift: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
    default: () => new Date().toLocaleDateString("sv-SE"),
  },
});

const TodoModel = mongoose.models.Todo || mongoose.model("Todos", todoSchema);
export default TodoModel;
