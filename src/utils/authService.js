import decode from "jwt-decode";
import auth0 from "auth0-js";
const ID_TOKEN_KEY = "id_token";
const ACCESS_TOKEN_KEY = "access_token";
const CLIENT_ID = "2z7jXurKScJDm5UlNb5X6McypezEmJxT";
const CLIENT_DOMAIN = "ybeck.auth0.com";
const REDIRECT = "http://localhost:8080/callback"; //change for production
const SCOPE = "read:authors";
const AUDIENCE = "YBecknews.com";

const auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export const login = () => {
  auth.authorize({
    responseType: "token id_token",
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
};

export const logout = () => {
  clearIdToken();
  clearAccessToken();
  window.location.reload();
};

export const requireAuth = (nextState, replace) => {
  if (!isLoggedIn()) {
    replace({ pathname: "/" });
  }
};

export const getIdToken = () => {
  return localStorage.getItem(ID_TOKEN_KEY);
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

const clearIdToken = () => {
  localStorage.removeItem(ID_TOKEN_KEY);
};

const clearAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

// Helper function that will allow us to extract the access_token and id_token
const getParameterByName = name => {
  let match = RegExp("[#&]" + name + "=([^&]*)").exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
};

// Get and store access_token in local storage
export const setAccessToken = () => {
  let accessToken = getParameterByName("access_token");
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

// Get and store id_token in local storage
export const setIdToken = () => {
  let idToken = getParameterByName("id_token");
  localStorage.setItem(ID_TOKEN_KEY, idToken);
};

export const isLoggedIn = () => {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
};

const getTokenExpirationDate = encodedToken => {
  const token = decode(encodedToken);
  if (!token.exp) {
    return null;
  }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
};

const isTokenExpired = token => {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
};
