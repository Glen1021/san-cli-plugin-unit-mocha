# san-cli-plugin-unit-mocha

> unit-mocha plugin for san-cli@3.0.0

## Injected Commands

- **`san test:unit`**

  Run unit tests with [mochapack](https://github.com/sysgears/mochapack) + [chai](http://chaijs.com/).

  **Note the tests are run inside Node.js with browser environment simulated with JSDOM.**

  ```
  Usage: san test:unit [options] [...files]

  Options:

    --watch, -w   run in watch mode
    --grep, -g    only run tests matching <pattern>
    --slow, -s    "slow" test threshold in milliseconds
    --timeout, -t timeout threshold in milliseconds
    --bail, -b    bail after first test failure
    --require, -r require the given module before running tests
    --include     include the given module into test bundle
    --inspect-brk Enable inspector to debug the tests
  ```

  Default files matches are: any files in `tests/unit` that end in `.spec.js`.

  All [mochapack command line options](https://sysgears.github.io/mochapack/docs/installation/cli-usage.html) are also supported.
