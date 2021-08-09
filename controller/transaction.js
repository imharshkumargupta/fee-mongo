const Transaction = require("../models/transaction");

exports.getTransactions = async (req, res, next) => {
  Transaction.find({})
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Successfully fetched the transactions",
        transactions: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.postTransaction = (req, res, next) => {
  const { amount, transactionType, month, adminId, studentId } = req.body;
  const transaction = new Transaction({
    amount,
    transactionType,
    month,
    adminId,
    studentId,
  });
  transaction
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Transaction created successfully",
        transaction: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
