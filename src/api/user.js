// this is polyfill version
import 'whatwg-fetch';
import getBaseUrl from './baseUrl.js';

const baseUrl = getBaseUrl();

// only func exported from module
export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// abstraction here and in add users over optimization IMO
export function deleteUser(id) {
  return del(`users/${id}`);
}

// 'delete' reserved in JS, hence 'del'
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

/* where are the args coming from for onSuccess() ? */
function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error);
}
