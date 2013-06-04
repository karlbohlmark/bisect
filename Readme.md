
# bisect

  Bisect sorted arrays

## Installation
    $ npm install bisect
    $ component install karlbohlmark/bisect

## API
  ```js
  var bisect = require('bisect')
  bisect([10, 20, 30, 40], 17) // -> 0
  bisect.low([10, 20, 30, 40], 17) // -> 0
  bisect.high([10, 20, 30, 40], 17) // -> 1
  ```
## License

  MIT
