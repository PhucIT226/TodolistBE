const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const apiTodo = require("./routes/apiTodo");
require("dotenv").config();

const app = express();
const PORT = process.env.BASE_URL;

app.use(express.json());
app.use(cors());

connection();

app.use("/api/todo", apiTodo);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
