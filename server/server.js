const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/todoSchema");

const port = 4000;

mongoose
  .connect(
    "mongodb+srv://affaankidwai:yGGOna1vy9GS95QG@cluster0.zt8mtda.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving todos" });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const { text, completed, deadline } = req.body;
    const todo = new Todo({ text, completed, deadline });
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error creating todo" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
