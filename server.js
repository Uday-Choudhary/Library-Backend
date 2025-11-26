require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const bookRouter = require("./src/routes/book.route");
const authorRouter = require("./src/routes/author.route")
const genreRouter = require("./src/routes/genre.routes")

app.use("/api/book", bookRouter);
app.use("/api/author" , authorRouter)
app.use("/api/genre", genreRouter)


app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});
