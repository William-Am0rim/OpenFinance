const { Router } = require("express")
const routes = Router()
const userRoutes = require("./usersRoutes")
const groupRoutes = require("./groupsRoutes")

routes.use("/users", userRoutes)
routes.use("/groups", groupRoutes)

module.exports = routes