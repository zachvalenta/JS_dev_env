// this is polyfill version
import 'whatwg-fetch';
import getBaseUrl from './baseUrl.js';

const baseUrl = getBaseUrl();

// only func exported from module
export function getUsers() {
  return get('users');
}

/* where are the args coming from for onSuccess() ? */

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error);
}
