const getDecimals = require('./lib/decimalHandler')
const { range } = require('./uniform')

const isLte = a => b => a <= b

const isFiniteOrThrow = (name, value) => {
    if (!Number.isFinite(value)) {
        throw new TypeError(`${name} should be a finite number. ${value} (${typeof value}) found.`)
    }
}

const choose = (data, chance) => {
    const random = range(1, 100)
    return data[chance.findIndex(isLte(random))]
}

const sequence = (start, chance, { step = 1 } = {}) => {
    isFiniteOrThrow('start', start)
    isFiniteOrThrow('step', step)

    const decs = getDecimals(0, start, step)
    const mult = 10 ** decs

    const random = range(1, 100)
    const index = chance.findIndex(isLte(random))

    return ((start * mult) + (index * step * mult)) / mult
}

module.exports = {
    choose,
    sequence,
}
