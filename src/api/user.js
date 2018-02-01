// this is polyfill version
import 'whatwg-fetch';

// only func exported from module
export function getUsers() {
  return get('users');
}

/* where are the args coming from for these params in get() et. al ? */

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error);
}
