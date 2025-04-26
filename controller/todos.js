import express from "express";
import Todomodel from "../models/todoModel.js"

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await Todomodel.find();
    res.status(200).json({ success: true, todos });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newtodo = new Todomodel({
      uppgift: req.body.uppgift,
      createdAt: new Date(),
    });

    const savedtodo = await newtodo.save();

    res.status(201).json({
      Message: "Todo was created successfully",
      savedtodo,
      success: true,
    });
  } catch (err) {
    res.status(400).json({ Message: "Something went wrong", err });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the todo by its ID
    const deletedTodo = await Todomodel.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({
        Message: "Todo not found",
        success: false,
      });
    }

    res.status(200).json({
      Message: "Todo was deleted successfully",
      deletedTodo,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      Message: "Something went wrong while deleting the todo",
      err,
    });
  }
});

export default router;
