/* IMPORT CSS DEMO */

// who knew? can import CSS into JS file; not sure you'd ever want to in real life
// not sure how DOM decides how to apply this (maybe just globally)
import './index.css'

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this course`);

/* API DEMO */

// named import
import {getUsers} from './api/user';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });
  // note backtick; for ES6 template string so you can format on multiple lines

  global.document.getElementById('users').innerHTML = usersBody;

});

