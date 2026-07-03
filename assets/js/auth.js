const AUTH_KEY = "mrg_auth";
const AUTH_VALUE = "ok";
const PASSWORD = "MRG2026";
const LOGIN_PATH = "/login.html";
const DEFAULT_REDIRECT = "/index.html";

function getCurrentPath() {
  return window.location.pathname.replace(/\\/g, "/");
}

function isLoginPage() {
  return getCurrentPath().endsWith("/login.html") || getCurrentPath() === "/login.html";
}

function getRedirectTarget() {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");

  if (!redirect) {
    return DEFAULT_REDIRECT;
  }

  return redirect;
}

export function checkAuth() {
  if (isLoginPage()) {
    return true;
  }

  const isAuthed = window.sessionStorage.getItem(AUTH_KEY) === AUTH_VALUE;

  if (isAuthed) {
    return true;
  }

  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  const loginUrl = `${LOGIN_PATH}?redirect=${encodeURIComponent(currentUrl)}`;
  window.location.replace(loginUrl);
  return false;
}

export function login(password) {
  if (password !== PASSWORD) {
    return false;
  }

  window.sessionStorage.setItem(AUTH_KEY, AUTH_VALUE);
  window.location.replace(getRedirectTarget());
  return true;
}

export function logout() {
  window.sessionStorage.removeItem(AUTH_KEY);
  window.location.replace(LOGIN_PATH);
}

window.checkAuth = checkAuth;
window.login = login;
window.logout = logout;
