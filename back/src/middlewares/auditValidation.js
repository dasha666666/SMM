const { check } = require("express-validator");
const resultValidation = require('./resultValidation');

const auditValidation = [
  check("name")
  .trim()
  .notEmpty()
  .isLength({min:2}),

  check("phone")
  .trim()
  .notEmpty()
  .isLength({min:9}),

  check("question")
  .trim()
  .notEmpty()
  .isLength({min:2}),

  resultValidation
];

module.exports = { auditValidation };
