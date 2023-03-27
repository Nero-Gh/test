require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./server/config/config");
const router = require("./server/routes/router");

const app = express();
const port = process.env.PORT || 5000;

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
