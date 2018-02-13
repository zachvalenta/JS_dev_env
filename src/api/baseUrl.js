export default function getBaseUrl() {
  const envFlag = window.location.hostname === 'localhost';
  return !envFlag ? 'http://localhost:3001/' : '/';
}

