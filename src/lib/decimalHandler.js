const countDecimals = num => Number.isFinite(num) && !Number.isInteger(num)
    ? num.toString().split('.')[1].length
    : 0

const getDecimals = (decs, ...args) => Math.max(decs, ...args.map(countDecimals))

module.exports = getDecimals
