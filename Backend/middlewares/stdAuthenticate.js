const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateStudent = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authorization token required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.role !== "student") {
      return res.status(403).json({ message: "Access denied. Student only." });
    }

    req.user = decoded; // Store user info in the request
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { authenticateStudent };
