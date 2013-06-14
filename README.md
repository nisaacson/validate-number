# Validate Number
Strip any extranous price characters such as `$` and make sure there is still a valid number

# Installation

```bash
npm install -S validate-number
```

# Usage

When using with a valid number, you will get the number back without any extra characters
```javascript
var validateNumber = require('validateNumber')
var extract = '-$1.99'
var price = validateNumber(extract)
console.log('price %s', price)
```

When using with a invalid number, you will get back null
```javascript
var validateNumber = require('validateNumber')
var extract = '-$foobar'
var price = validateNumber(extract) // price will be null
console.log('price %s', price)
```


