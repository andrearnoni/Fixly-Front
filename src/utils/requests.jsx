import axios from "axios";
import { BASE_URL } from "./system";

export function requestBackend(config) {
  return axios( { ...config, baseURL: BASE_URL })
}