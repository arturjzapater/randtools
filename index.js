const custom = require("./src/custom")
const normal = require("./src/normal")
const uniform = require("./src/uniform")

module.exports = { ...custom, ...normal, ...uniform}