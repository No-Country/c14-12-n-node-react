const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json({ extended: true }));
app.use(cors());

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    nombre: "Juan",
    email: "ljuan648l@gmail.com",
  };

  jwt.sign({ user }, "secret", { expiresIn: "20d" }, (err, token) => {
    res.json({
      token,
    });
  });
});

app.post("/account", verifyToken, (req, res) => {
  jwt.verify(req.token, "secret", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "User authorizated",
        authData,
      });
    }
  });
});

// Authorization : Bearer <token>
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

//Mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err.message));

app.listen(port, () => console.log(`Server running on port ${port}`));
