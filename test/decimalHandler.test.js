const tap = require('tap')
const getDecimals = require('../src/lib/decimalHandler')

tap.test('getDecimals', t => {
    t.test('should return 0 if there are no decimals', t => {
        t.equal(getDecimals(0, 12), 0)
        t.end()
    })

    t.test('should return first argument if greater than decimals in other arguments', t => {
        t.equal(getDecimals(5, 1, 2, 3, 7), 5)
        t.end()
    })

    t.test('should return max amount of decimals', t => {
        t.equal(getDecimals(0, 1.5, 1.05), 2)
        t.end()
    })

    t.end()
})
