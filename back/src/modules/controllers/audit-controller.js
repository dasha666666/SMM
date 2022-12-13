const AuditService = require("../services/audit-service");

class AuditController {
  async createAudit(req, res, next) {
    try {
      const { name, phone, question } = req.body;
      await AuditService.createAudit(name, phone, question);
      res.status(200).send("Вы были записаны на аудит");
    } catch (error) {
      res.status(400).send("К сожалению, не смогли создать запись, попробуйте позже");
    }
  }
}

module.exports = new AuditController();
  