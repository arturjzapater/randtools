const countDecimals = num => {
    const decStr = num.toString().split(".")[1]
    return decStr ? decStr.length : 0
}

const getDecimals = (decs, ...args) => Math.max(decs, ...args.map(x => countDecimals(x)))

module.exports = getDecimals
