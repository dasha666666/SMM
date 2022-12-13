const Audit = require("../../models/audit");
const moment = require("moment");

class AuditService {
  async createAudit(name, phone, question) {
    const date = moment().format('L');
    return await Audit.create({
      name,
      phone,
      question,
      date
    });
  }
}

module.exports = new AuditService();
