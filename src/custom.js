const { range } = require('./uniform')

const choose = (data, chance) => {
    const elem = range(1, 100)
    return data[chance.findIndex(x => elem <= x)]
}

module.exports = {
    choose,
}
