const { Router } = require("express")
const groupRoutes = Router()
const GroupsController = require("../controllers/GroupsController")
const groupsController = new GroupsController()

groupRoutes.post("/", groupsController.create)

module.exports = groupRoutes