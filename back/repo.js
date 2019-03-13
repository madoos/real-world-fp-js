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

const findMoviesByYear = year => {
  const movies = {
    2019: [
      { name: "Zama" },
      { name: "You Were Never Really Here" },
      { name: "Annihilation" },
      { name: "Mandy" },
      { name: "The Mule" },
      { name: "I Am Not a Witch" },
      { name: "Shoplifters" },
      { name: "Eighth Grade" }
    ],
    2018: [
      { name: "The Night Comes for Us" },
      { name: "Ant-Man and the Wasp" },
      { name: "The Ritual" },
      { name: "Shirkers" },
      { name: "First Man" },
      { name: "Private Life" }
    ]
  }

  return movies[year] || []
}

module.exports = {
  findUserById,
  findMoviesByYear
}
