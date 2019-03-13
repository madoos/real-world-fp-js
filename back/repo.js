const { times } = require("ramda")
const { internet, image } = require("faker")

const doUser = id => ({
  id,
  name: internet.userName(),
  avatar: image.avatar(),
  email: internet.email(),
  level: 0
})

const _users = times(doUser, 10)

// userById :: Number -> Promise Object | Promise null
const findUserById = async id => {
  return _users[id] || null
}

const findMovies = () => [
  { name: "Zama" },
  { name: "You Were Never Really Here" },
  { name: "Annihilation" },
  { name: "Mandy" },
  { name: "The Mule" },
  { name: "I Am Not a Witch" },
  { name: "Shoplifters" },
  { name: "Eighth Grade" }
]

module.exports = {
  findUserById,
  findMovies
}
