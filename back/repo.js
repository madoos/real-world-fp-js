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
      { title: "Zama" },
      { title: "You Were Never Really Here" },
      { title: "Annihilation" },
      { title: "Mandy" },
      { title: "The Mule" },
      { title: "I Am Not a Witch" },
      { title: "Shoplifters" },
      { title: "Eighth Grade" }
    ],
    2018: [
      { title: "The Night Comes for Us" },
      { title: "Ant-Man and the Wasp" },
      { title: "The Ritual" },
      { title: "Shirkers" },
      { title: "First Man" },
      { title: "Private Life" }
    ]
  }

  return movies[year] || []
}

module.exports = {
  findUserById,
  findMoviesByYear
}
