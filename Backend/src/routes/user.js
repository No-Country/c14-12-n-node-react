const express = require("express");
const userSchema = require("../models/user");
const bcrypt = require("bcryptjs");
const createAccessToken = require("../libs/jwt");

const router = express.Router();

//Create users
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await userSchema.findOne({ email });
    if (userExist)
      return res.status(400).json({ message: "Email already exist" });
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new userSchema({
      name,
      email,
      password: passwordHash,
    });

    user.save();

    const token = await createAccessToken({ id: user._id });
    res.cookie("token", token),
      res.json({ message: `User created succesfully` });
  } catch (err) {
    res.send(`Error: ${err}`);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await userSchema.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, userFound.password);

    if (!match) return res.status(400).json({ message: "Wrong password" });

    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token),
      res.json({
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
      });
  } catch (err) {
    res.send(err);
  }
});

router.post("/logout", (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
});

// Get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get a User
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a User
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, email, password, image } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Delete a User
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findByIdAndRemove(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
