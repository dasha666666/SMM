const { Schema, model } = require("mongoose");

const AuditSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    require: true,
  },
});

module.exports = Audit = model("Audit", AuditSchema);
