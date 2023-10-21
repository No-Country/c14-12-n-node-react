const jwt = require("jsonwebtoken");

function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: "20d" },
      (err, token) => {
        err ? reject(err) : resolve(token);
      }
    );
  });
}

module.exports = createAccessToken;
