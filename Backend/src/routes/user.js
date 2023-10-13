const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//Crear usuario
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then(() => {
      res.json({ message: `User created succesfully` });
    })
    .catch((err) => res.json({ message: err.message }));
});

module.exports = router;
