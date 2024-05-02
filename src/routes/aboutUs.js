const express = require("express");
const router = express.Router();
const aboutUsController = require("../app/controllers/aboutUsController");

router.get("/", aboutUsController.aboutUs);

module.exports = router;
