const express = require("express");
const app = express();
const connection = require("../viva/db");
const Routess = require("./Routes/books");
const cors = require("cors");

connection();

app.use(express.json());
app.use(cors());

app.use("/api/books",Routess);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));