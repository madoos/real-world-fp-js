const {times} = require('ramda')
const {internet, image} = require('faker')

const doUser = id => ({
  id,
  name: internet.userName(),
  avatar: image.avatar(),
  email: internet.email(),
  level: 0,
})

const _users = times(doUser, 10)

// userById :: Number -> Promise Object | Promise null
const findUserById = async id => {
  return _users[id] || null
}

module.exports = {
  findUserById,
}
