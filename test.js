const should = require('chai').should();
const myFunction = require('./index');

describe('myFunction', () => {
  it('If the levels of nesting or the lengths of the strings do not match, return -1', () => {
    myFunction(
      ['I', ['love'], [['awesome']], 'drones'],
      ['I', ['hate'], [[['magenta']]], 'drains']
    ).should.equal(-1);
  });

  it('If the lengths of any fragment differ, return -1', () => {
    myFunction(
      ['I', ['adore'], [[['red']]], 'drones'],
      ['I', ['hate'], [[['magenta']]], 'drains']
    ).should.equal(-1);
  });
});
