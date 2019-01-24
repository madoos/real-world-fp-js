const {curry} = require('ramda')

const log = curry((tag, data) => {
  console.log(tag, data)
})

module.exports = {
  log,
}
