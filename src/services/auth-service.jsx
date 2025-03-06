import QueryString from "qs";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { requestBackend } from "../utils/requests";
import * as accessTokenRepository from "../localstorage/access-token-repository";

export function loginRequest(loginData) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  const config = {
    method: "POST",
    url: "/oauth2/token",
    data: requestBody,
    headers,
  };

  return requestBackend(config);
}

export function logout() {
  accessTokenRepository.remove();
}

export function saveAccessToken(token) {
  accessTokenRepository.save(token);
}

export function getAccessToken() {
  return accessTokenRepository.get();
}
