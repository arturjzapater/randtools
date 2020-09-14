const tap = require('tap')
const custom = require('../src/custom')

tap.test('custom.sequence', t => {
    t.test('should return a number within the sequence', t => {
        const chances = [ 30, 60, 100 ]
        const seq = [ 1, 2, 3 ]
        t.ok(seq.includes(custom.sequence(1, chances)))
        t.ok(seq.includes(custom.sequence(1, chances)))
        t.ok(seq.includes(custom.sequence(1, chances)))
        t.end()
    })

    t.test('should use step to calculate next number in sequence', t => {
        const chances = [ 20, 50, 70, 100 ]
        const seq = [ 0, 3, 6, 9 ]
        t.ok(seq.includes(custom.sequence(0, chances, { step: 3 })))
        t.ok(seq.includes(custom.sequence(0, chances, { step: 3 })))
        t.ok(seq.includes(custom.sequence(0, chances, { step: 3 })))
        t.end()
    })

    t.test('should handle decimals', t => {
        const chances = [ 20, 50, 70, 100 ]
        const seq = [ 1.02, 1.39, 1.76, 2.13 ]
        t.ok(seq.includes(custom.sequence(1.02, chances, { step: 0.37 })))
        t.ok(seq.includes(custom.sequence(1.02, chances, { step: 0.37 })))
        t.ok(seq.includes(custom.sequence(1.02, chances, { step: 0.37 })))
        t.end()
    })

    t.test('should throw on invalid start', t => {
        t.throws(() => custom.sequence('potato', [ 50, 100 ]))
        t.throws(() => custom.sequence(12, [ 50, 100 ], { step: {} }))
        t.end()
    })

    t.end()
})
