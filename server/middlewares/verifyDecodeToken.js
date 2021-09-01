const jwt = require("jsonwebtoken");
const { secretKey } = require("../config");

const decodeToken = (req, res, next) => {
  const bearerHeader = req.headers.auth;

  if (typeof bearerHeader != "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];

    req.token = bearerToken;
    const data = jwt.verify(bearerToken, secretKey, (err, token) => {
      if (err) {
        return "Forbidden";
      } else {
        return token;
      }
    });

    if (data == "Forbidden") {
      return res.sendStatus(403);
    }

    req.headers.tokenData = data;
    next();
  } else {
    return res.sendStatus(403);
  }
};

module.exports = decodeToken;
