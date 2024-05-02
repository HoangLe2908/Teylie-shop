const express = require("express");
const router = express.Router();
const contractController = require("../app/controllers/contractController");

router.get("/", contractController.contract);

module.exports = router;
