const express = require("express");
const router = express.Router();

router.get("/video", handleRequest);
module.exports = router;
