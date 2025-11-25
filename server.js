require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const bookRouter = require("./src/routes/book.route");

app.use("/api/book", bookRouter);

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});
