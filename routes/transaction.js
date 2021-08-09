const express = require("express");
const router = express.Router();
const transactionController = require("../controller/transaction");

router.get("/transactions", transactionController.getTransactions);
router.post("/transaction", transactionController.postTransaction);

module.exports = router;
