const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin");

router.get("/admins", adminController.getAdmins);
router.post("/admin", adminController.postAdmin);

module.exports = router;
