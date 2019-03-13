const express = require("express")
const enhance = require("express-flow-extensions")
const cors = require("cors")

const { createRouter } = enhance
const { pipe } = require("ramda")
const { getUser, getMovies } = require("./controller")

const createServer = pipe(
  express,
  enhance
)

const api = createRouter([
  {
    method: "GET",
    path: "/users/:id",
    handler: getUser
  },
  { method: "GET", path: "/movies/:year", handler: getMovies }
])

const app = createServer()

app.use(cors({ origins: "*" })).use("/api", api)

module.exports = app
