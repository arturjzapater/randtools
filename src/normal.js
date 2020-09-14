const getDecimals = require('./lib/decimalHandler')

const base = (m = 0, d = 1) =>
    (Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random())) * d + m

const calculateStdDev = (from, to, devs) => (to - from) / (2 * devs)

const isInBounds = (from, to, result) => result >= from && result <= to

const isPositiveInt = num => typeof num === 'number' && num > 0

const choose = (array, devs = 3) => array[range(0, array.length - 1, 0, devs)]

const mean = (m, d, decs = 0) => {
    const mult = 10 ** decs
    return Math.round(base(m, d) * mult) / mult
}

const range = (from, to, decs = 0, devs = 3) => {
    const deviations = isPositiveInt(devs) ? devs : 3
    const mean = (from + to) / 2
    const mult = 10 ** getDecimals(decs, from, to)

    const result = Math.round(base(mean, calculateStdDev(to, from, deviations)) * mult) / mult

    return isInBounds(from, to, result)
        ? result
        : range(from, to, decs, devs)
}

module.exports = {
    choose,
    mean,
    range,
}
