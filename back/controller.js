const {pipe, always, path, isNil, complement, assoc, prop} = require('ramda')
const enhance = require('express-flow-extensions')
const {OK, UNPROCESSABLE_ENTITY} = require('http-status')
const {flow, withStatus} = enhance
const {findUserById} = require('./repo')
const format = data => ({data})
const getId = path(['params', 'id'])

const isEmpty = pipe(
  prop('data'),
  isNil
)

const hasData = complement(isEmpty)

const getUser = flow(
  getId,
  findUserById,
  format,
  withStatus({
    [OK]: hasData,
    [UNPROCESSABLE_ENTITY]: isEmpty,
  })
)

module.exports = {
  getUser,
}
