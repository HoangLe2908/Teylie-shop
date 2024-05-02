const express = require("express");
const router = express.Router();
const settingController = require("../app/controllers/settingController");

router.get("/", settingController.setting);

module.exports = router;
