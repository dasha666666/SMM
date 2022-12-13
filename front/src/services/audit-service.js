import $api from "../http";
import { HOST } from "../constants";

class Audit {
  static createAudit(audit) {
    return $api.post(`${HOST}/audit`, audit);
  }
}

export default Audit;
