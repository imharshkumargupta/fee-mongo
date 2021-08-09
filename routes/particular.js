const express = require("express");
const router = express.Router();
const particularController = require("../controller/particular");

router.get("/particulars", particularController.getParticulars);
router.post("/particular", particularController.postParticular);

module.exports = router;
