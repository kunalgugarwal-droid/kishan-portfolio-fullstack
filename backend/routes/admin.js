const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return res.status(500).json({ success: false, message: "ADMIN_PASSWORD not set on server" });
  }

  if (password === adminPassword) {
    return res.json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: "Invalid password" });
  }
});

module.exports = router;
