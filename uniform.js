const getDecimals = require('./src/decimalHandler')

const base = (from, to) => Math.floor(Math.random() * (1 + to - from)) + from

const unifChoose = array => array[base(0, array.length - 1)]

const unifRange = (from, to, decs=0) => {
    const mult = 10 ** getDecimals(decs, from, to)
    return base(from * mult, to * mult) / mult
}

module.exports = { unifChoose, unifRange}
