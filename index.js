const custom = require("./src/custom")
const normal = require("./src/normal")
const uniform = require("./src/uniform")

const oldNormal = normal.mean
oldNormal.mean = normal.mean
oldNormal.range = normal.range
oldNormal.choose = normal.choose

module.exports = {
    normal: oldNormal,
    custom,
    uniform,
    normRange: normal.range,
    normChoose: normal.choose,
    unifChoose: uniform.choose,
    unifRange: uniform.range,
    cstmChoose: custom.choose,
}
