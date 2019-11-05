const custom = require("./custom")
const normal = require("./normal")
const uniform = require("./uniform")

module.exports = { ...custom, ...normal, ...uniform}