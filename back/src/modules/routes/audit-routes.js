const { Router } = require("express");
const {
  auditValidation,
} = require("../../middlewares/auditValidation");
const auditController = require("../controllers/audit-controller");
const routes = new Router();

routes.post(
  "/audit",
  auditValidation,
  auditController.createAudit
);

module.exports = routes;
