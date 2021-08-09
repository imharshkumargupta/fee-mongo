const Student = require("../models/student");

exports.getStudents = async (req, res, next) => {
  Student.find({})
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Successfully fetched the students",
        students: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.postStudent = (req, res, next) => {
  const {
    studentEmail,
    name,
    studentImage,
    fatherName,
    studentType,
    className,
    section,
  } = req.body;
  const student = new Student({
    studentEmail,
    name,
    studentImage,
    fatherName,
    studentType,
    class: className,
    section,
  });
  student
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Student created successfully",
        student: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
