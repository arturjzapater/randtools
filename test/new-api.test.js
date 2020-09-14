const tap = require('tap')
const rnd = require('../index')

tap.test('new api', t => {
    t.test('normal', t => {
        t.ok(typeof rnd.normal.mean === 'function', 'mean is a function')
        t.ok(typeof rnd.normal.range === 'function', 'range is a function')
        t.ok(typeof rnd.normal.choose === 'function', 'choose is a function')
        t.end()
    })

    t.test('uniform', t => {
        t.ok(typeof rnd.uniform.range === 'function', 'range is a function')
        t.ok(typeof rnd.uniform.choose === 'function', 'choose is a function')
        t.end()
    })

    t.test('custom', t => {
        t.ok(typeof rnd.custom.choose === 'function', 'choose is a function')
        t.end()
    })

    t.end()
})
