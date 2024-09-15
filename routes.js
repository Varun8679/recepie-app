const express = require("express");
const router = express.Router();

router.get("/getData", (req, res) => {
  res.send("Hello From Server ");
});

module.exports = router;
