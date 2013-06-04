var bisect = require('./')
var assert = require('better-assert')

var arr = [10, 20, 30, 40]

var low = bisect.low
assert(bisect.low(arr, 5) == 0)
assert(bisect.low(arr, 10) == 0)
assert(bisect.low(arr, 20) == 1)
assert(bisect.low(arr, 25) == 1)
assert(bisect.low(arr, 30) == 2)
assert(bisect.low(arr, 35) == 2)
assert(bisect.low(arr, 40) == 3)
assert(bisect.low(arr, 45) == 3)

var high = bisect.high
assert(high(arr, 5) == 0)
assert(high(arr, 10) == 0)
assert(high(arr, 20) == 1)
assert(high(arr, 25) == 2)
assert(high(arr, 30) == 2)
assert(high(arr, 35) == 3)
assert(high(arr, 40) == 3)
assert(high(arr, 45) == 3)
