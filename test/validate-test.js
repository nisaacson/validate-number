var should = require('should')
var validateNumber = require('../')
describe('Validate Number', function () {
  it('should return null with invalid number', function () {
    var input = '$foobar'
    var price = validateNumber(input)
    should.not.exist(price)
  });

  it('should return clean number with valid input', function () {
    var input = '-$1.99'
    var price = validateNumber(input)
    price.should.eql('-1.99')
  });
});
