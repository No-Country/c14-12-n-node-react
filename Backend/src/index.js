const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");


const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//Mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err.message));

app.listen(port, () => console.log(`Server running on port ${port}`));