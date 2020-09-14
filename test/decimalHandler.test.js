const tap = require('tap')
const getDecimals = require('../src/lib/decimalHandler')

tap.test('getDecimals', t => {
    t.test('should return 0 if there are no decimals', t => {
        t.equal(getDecimals(0, 12), 0)
        t.equal(getDecimals(0, -5, 3, 234), 0)
        t.end()
    })

    t.test('should return first argument if greater than decimals in other arguments', t => {
        t.equal(getDecimals(5, 1, 2, 3, 7), 5)
        t.equal(getDecimals(3, 245, 423.4, 32, 232.04, 43.1), 3)
        t.end()
    })

    t.test('should return max amount of decimals', t => {
        t.equal(getDecimals(0, 1.5, 1.05), 2)
        t.equal(getDecimals(2, 1.005, 12, 123.4, 3423.5345), 4)
        t.end()
    })

    t.test('should return first argument on invalid input', t => {
        t.equal(getDecimals(1, NaN), 1)
        t.equal(getDecimals(2, '12.555'), 2)
        t.end()
    })

    t.end()
})
