import Audit from "../services/audit-service";

class Store {
  async createAudit(audit) {
    try {
      const response = await Audit.createAudit(audit);
      return response.status;
    } catch (error) {
      return error.response.status;
    }
  }
}

export default Store;
