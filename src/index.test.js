import {expect} from 'chai'; // named import

import jsdom from 'jsdom';
import fs from 'fs';

describe('hello world', () => {
  it('just make sure everything is wired up', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("zv_dev_starter kit");
      done();
      // not sure how done() works here but w/out (and w/out passing as arg above) test will pass even if it should fail
      // think, w/out done(), Mocha will just keep moving on in exec when it should wait; idk, rewatch 'DOM testing'
      // also, re: use in NPM script, assume that Mocha provides watching OOB
      window.close();
    });
  })
})
