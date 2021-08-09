const Admin = require("../models/admin");

exports.getAdmins = async (req, res, next) => {
  Admin.find({})
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Successfully fetched the admins",
        admins: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.postAdmin = (req, res, next) => {
  const { name, username, password, isSuperAdmin } = req.body;
  const admin = new Admin({
    name,
    username,
    password,
    isSuperAdmin,
  });
  admin
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Admin created successfully",
        admin: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
