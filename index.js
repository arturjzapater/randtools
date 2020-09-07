const custom = require("./src/custom")
const normal = require("./src/normal")
const uniform = require("./src/uniform")

module.exports = {
    ...normal,
    custom,
    uniform,
    unifChoose: uniform.choose,
    unifRange: uniform.range,
    cstmChoose: custom.choose,
}
