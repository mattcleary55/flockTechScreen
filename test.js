const should = require('chai').should();
const myFunction = require('./index');

describe('myFunction', () => {
  it('returns the sum of the number of necessary one character substitutions multiplied by 2 to the power of the depth of nesting at which substitution must occur', () => {
    myFunction(
      ['I', ['love'], [[['awesome', 'shiny']]], 'drones'],
      ['I', ['hate'], [[['magenta', 'dirty']]], 'drains']
    ).should.equal(97);

    myFunction(
      [['James'], ['only'], [['likes', 'broken']], 'drones'],
      [['Jonny'], ['just'], [['loves', 'badass']], 'robots']
    ).should.equal(49);
  });

  it('If the levels of nesting, or the lengths of the strings/arrays do not match, return -1', () => {
    myFunction(
      ['I', ['love'], [['awesome']], 'drones'],
      ['I', ['hate'], [[['magenta']]], 'drains']
    ).should.equal(-1);

    myFunction(
      ['I', ['adore'], [[['red']]], 'drones'],
      ['I', ['hate'], [[['magenta']]], 'drains']
    ).should.equal(-1);
  });
});
