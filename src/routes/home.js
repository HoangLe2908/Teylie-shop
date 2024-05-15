const express = require("express");
const router = express.Router();
const homeController = require("../app/controllers/homeController");

router.get("/women", homeController.women);
router.get("/men", homeController.men);
router.get("/", homeController.home);

module.exports = router;
