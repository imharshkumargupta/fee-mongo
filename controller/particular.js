const Particular = require("../models/particular");

exports.getParticulars = async (req, res, next) => {
  Particular.find({})
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Successfully fetched the particulars",
        particulars: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.postParticular = (req, res, next) => {
  const { name, amount, className, month, session } = req.body;
  const particular = new Particular({
    name,
    amount,
    class: className,
    month,
    session,
  });
  particular
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Particular created successfully",
        particular: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
