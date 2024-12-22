const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const router = require("./routes/index");

app.use(cors());
app.use(express.json())

// connect DB
db.connect();

// routes
app.use("/api", router);

app.get("/hostel", (req, res) => {
  console.log(req);
  console.log("inside server");
  res.send("Hello from our server! dada");
});

// server start
app.listen(process.env.PORT|| 8090, () => {
    console.log(`server listening on port ${process.env.PORT}`);
  });
