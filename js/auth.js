// js/auth.js
const COOKIE_NAME = 'bf_user';

export function getUser() {
  try {
    const raw = document.cookie.split('; ').find(r => r.startsWith(COOKIE_NAME+'='));
    if (!raw) return null;
    const json = decodeURIComponent(raw.split('=')[1]);
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function setUser(user) {
  // 7-day simple cookie (NOT httpOnly; static prototype only)
  const json = encodeURIComponent(JSON.stringify(user));
  const expires = new Date(Date.now() + 7*24*3600*1000).toUTCString();
  document.cookie = `${COOKIE_NAME}=${json}; expires=${expires}; path=/; SameSite=Lax`;
}

export function logout() {
  document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  window.location.href = '/';
}

export function requireAuth() {
  const user = getUser();
  if (!user) window.location.href = '/';
  return user;
}
