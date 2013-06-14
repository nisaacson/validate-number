module.exports = function(input) {
  var price = input.replace(/[\$,\s]/g,'');
  if (!price.match(/^-?[\d\.]+$/)) {
    return null;
  }
  return price
}
