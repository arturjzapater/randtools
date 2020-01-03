const { unifRange } = require('./uniform')

const cstmChoose = (data, chance) => {
    const elem = unifRange(1, 100)
    return data[chance.findIndex(x => elem <= x)]
}

module.exports = { cstmChoose }