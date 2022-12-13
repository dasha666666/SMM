import axios from "axios";
import { HOST } from "../constants";

const $api = axios.create({
  withCredentials: true,
  baseURL: HOST,
});

export default $api;

