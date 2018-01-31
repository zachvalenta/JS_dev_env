// who knew? can import CSS into JS file; not sure you'd ever want to in real life
// not sure how DOM decides how to apply this (maybe just globally)
import './index.css'

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this course`);
