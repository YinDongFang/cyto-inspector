const getMinValue = require('./getMinValue')
const truncateString = require('./truncateString')
const numberArrayToString = require('./numberArrayToString')

module.exports = (str) => {
    return str.split("").map((char) => parseInt(char));
  }